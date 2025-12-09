# auth-roadmap.md
## 🔍 DIAGNOSI DEL PROBLEMA REALE

### Situazione Attuale
Attualmente esistono due codebase separate che non dialogano correttamente:
1.  **/dev/**: Ambiente locale (React/Vite). Funziona bene in isolamento ma non è collegato a Shopify.
2.  **/theme/**: Tentativo di tema Shopify. Spesso rotto, richiede conversione manuale e non sfrutta il tooling moderno.

**Problemi Fondamentali:**
*   ❌ Doppia manutenzione
*   ❌ Divergenza del codice nel tempo
*   ❌ Conversioni manuali continue
*   ❌ Bug impossibili da debuggare perché l'ambiente locale ≠ produzione

---

## 🎯 LA SOLUZIONE CORRETTA: SINGLE SOURCE OF TRUTH

### Principio Fondamentale
Un'unica codebase che funziona sia in locale (tramite Shopify CLI) che su Shopify (tramite build process).

### Architettura Target

```
SINGLE SOURCE OF TRUTH
│
├── /theme/                    ← Struttura Shopify nativa (Output/Dist)
│   ├── /assets/              ← JS/CSS Compilati finiscono qui
│   │   ├── theme.css
│   │   ├── app.js
│   │   └── vendor.js
│   ├── /sections/            ← Liquid Sections
│   ├── /snippets/
│   ├── /templates/
│   └── /layout/
│
├── /src/                      ← Codice sorgente (Sviluppo)
│   ├── /js/
│   │   ├── components/       ← Componenti JS (Vanilla o Framework leggero)
│   │   ├── utils/
│   │   └── main.js           ← Entry point
│   ├── /scss/                ← Stili sorgente
│   └── /liquid-templates/    ← (Opzionale) Se usiamo tool per generare liquid
│
├── /config/
│   ├── webpack.config.js     ← (o vite.config.js) Build pipeline
│   └── shopify.theme.toml    ← Configurazione Shopify CLI
│
└── package.json              ← NPM scripts unificati
```

### Workflow Operativo

1.  **Sviluppo Locale (`npm run dev`)**:
    *   **Shopify CLI** serve il tema a `https://127.0.0.1:9292`
    *   **Hot Reload** attivo modifica JS/CSS in tempo reale.
    *   **Dati Reali**: Il sito locale usa i dati del negozio Shopify reale (o staging).
2.  **Build (`npm run build`)**:
    *   Webpack/Vite compila `/src` in `/theme/assets`.
    *   Minificazione e ottimizzazione assets.
3.  **Deploy (`npm run deploy`)**:
    *   Push su GitHub → GitHub Action → Shopify Store.

---

## 🏗️ ARCHITETTURA TECNICA: LIQUID + JS IBRIDO

Il segreto è non sostituire Liquid con JS, ma farli collaborare.

### Pattern: Liquid Render + JS Hydration

**Liquid (Server Side)**: Si occupa di SEO, struttura iniziale e dati critici.
```liquid
<!-- theme/sections/product-grid.liquid -->
<div class="product-grid" data-component="ProductGrid">
  {% for product in collection.products %}
    <div class="product-card" data-product-id="{{ product.id }}">
       <!-- HTML renderizzato dal server per SEO e velocità -->
       <h3>{{ product.title }}</h3>
    </div>
  {% endfor %}
</div>

<script>
  // Passaggio dati al JS
  window.collectionData = {{ collection.products | json }};
</script>
```

**JavaScript (Client Side)**: "Enhance" dell'esperienza utente.
```javascript
// src/js/components/ProductGrid.js
export default class ProductGrid {
  constructor(element) {
    this.element = element;
    // Usa i dati iniettati da Liquid o un fallback vuoto
    this.products = window.collectionData || [];
    this.init();
  }
  
  // Logica interattiva (filtri, add to cart, animazioni)
}
```

---

## 🔄 STRATEGIA DI MIGRAZIONE & GIT

### Repository Strategy
**UNA Repository, TRE Branch.**

*   `main` (Production): Corrisponde al negozio Live. Protetto.
*   `staging` (Test): Corrisponde a un "Development Store" di Shopify. Qui si testa tutto.
*   `develop` (Local): Dove avviene lo sviluppo quotidiano.

### Pipeline di CI/CD
1.  Dev lavora su `feature/x` → Merge su `develop`.
2.  Test locale con `shopify theme dev`.
3.  Merge `develop` → `staging`. GitHub Action fa deploy su Store di Staging.
4.  QA su Staging. Se OK → Merge `staging` → `main`. Deploy su Live.

---

## 🚀 PIANO OPERATIVO STEP-BY-STEP

### MILESTONE 1: Setup Ambiente (1-2 Giorni)
- [ ] Backup codice attuale.
- [ ] Setup Shopify CLI 3.x.
- [ ] Configurazione Build System (Webpack/Vite).
- [ ] Setup Git Branching e GitHub Actions.

### MILESTONE 2: Audit (1 Giorno)
- [ ] Analisi `/dev/`: Cosa teniamo?
- [ ] Analisi `/theme/`: Cosa è rotto?
- [ ] Mappatura componenti.

### MILESTONE 3: Conversione Core (3-5 Giorni)
- [ ] Ristrutturazione cartelle.
- [ ] Unificazione Layout (Header/Footer).
- [ ] Home Page & Sezioni base.
- [ ] Product Page & Collection Page.

### MILESTONE 4+5: Advanced & Polish
- [ ] Funzionalità AJAX (Cart, Filtri).
- [ ] Ottimizzazione Performance.
- [ ] Testing Cross-browser.

---

Questa roadmap serve come riferimento unico per il refactoring dell'architettura di LegerLAB.
