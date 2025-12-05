import { Product, RoutePath } from '../types';

const products: Product[] = [
  {
    id: "1",
    title: "Kit Collant Drenante - 6 Trattamenti",
    description: "Il trattamento intensivo completo. Collant ricaricabile + 6 ricariche di Gel Attivo.",
    price: 59.99,
    link: RoutePath.ORDER,
    image_link: "/react-assets/images/products/kit-6-treatments-front.webp",
    availability: "in stock",
    sku: "LEGER-KIT-06",
    handle: "kit-collant-drenante-6-trattamenti",
    seo_title: "Kit Collant Drenante 6 Trattamenti | Leger Lab",
    seo_description: "Kit completo con collant ricaricabile + 6 ricariche di Gel Attivo. Trattamento intensivo anticellulite per risultati duraturi. Miglior rapporto qualità-prezzo.",
    images: [
      "/react-assets/images/products/kit-6-treatments-front.webp"
    ],
    brand: "Leger Lab",
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: "2",
    title: "Kit Collant Drenante - 1 Trattamento",
    description: "Ideale per provare. 1 trattamento drenante intensivo, pronto all'uso e ricaricabile.",
    price: 24.99,
    link: RoutePath.ORDER,
    image_link: "/react-assets/images/products/kit-1-treatment-front.webp",
    availability: "in stock",
    sku: "LEGER-KIT-01",
    handle: "kit-collant-drenante-1-trattamento",
    seo_title: "Kit Collant Drenante 1 Trattamento | Prova Leger Lab",
    seo_description: "Kit starter ideale per provare il collant drenante Leger Lab. 1 trattamento completo, ricaricabile. Perfetto per iniziare il tuo percorso benessere.",
    images: [
      "/react-assets/images/products/kit-1-treatment-front.webp"
    ],
    brand: "Leger Lab",
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: "3",
    title: "Ricarica 500 ml Gel Attivo",
    description: "Ricarica per Kit Collant Drenanti Anticellulite Léger Lab - 500 ml di Gel Attivo.",
    price: 29.99,
    link: RoutePath.ORDER,
    image_link: "/react-assets/images/products/refill-500ml.webp",
    availability: "in stock",
    sku: "LEGER-REFILL-500",
    handle: "ricarica-gel-attivo-500ml",
    seo_title: "Ricarica Gel Attivo 500ml | Leger Lab",
    seo_description: "Ricarica 500ml di Gel Attivo per collant drenante Leger Lab. Formula professionale con principi attivi naturali. Compatibile con tutti i kit.",
    images: [
      "/react-assets/images/products/refill-500ml.webp"
    ],
    brand: "Leger Lab",
    rating: 4.9,
    reviewCount: 203
  }
];

export default products;
