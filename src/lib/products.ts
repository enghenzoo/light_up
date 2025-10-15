export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  size: string
  rating: number
  reviews: number
  ingredients: string[]
  benefits: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Facial Cleanser",
    category: "Cleansers",
    price: 9.99,
    image: "/natural-facial-cleanser-bottle-with-eucalyptus.jpg",
    description: "Gentle daily cleanser with natural botanicals",
    size: "140.9 fl oz / 237ml",
    rating: 4.5,
    reviews: 152,
    ingredients: ["Aloe Vera", "Green Tea Extract", "Vitamin E", "Chamomile"],
    benefits: ["Deep Cleansing", "Hydrating", "Gentle Formula"],
  },
  {
    id: "2",
    name: "Moisturizer",
    category: "Moisturizers",
    price: 11.99,
    image: "/natural-moisturizer-bottle-minimal.jpg",
    description: "Lightweight daily moisturizer for all skin types",
    size: "50ml",
    rating: 4.7,
    reviews: 203,
    ingredients: ["Hyaluronic Acid", "Jojoba Oil", "Shea Butter"],
    benefits: ["24h Hydration", "Non-greasy", "Fast Absorbing"],
  },
  {
    id: "3",
    name: "Cleansing Oil",
    category: "Cleansers",
    price: 12.99,
    image: "/cleansing-oil-bottle-natural-green.jpg",
    description: "Nourishing cleansing oil removes makeup effortlessly",
    size: "100ml",
    rating: 4.6,
    reviews: 178,
    ingredients: ["Olive Oil", "Vitamin E", "Rosehip Oil"],
    benefits: ["Makeup Removal", "Nourishing", "Gentle on Skin"],
  },
  {
    id: "4",
    name: "Micellar Cleansing",
    category: "Cleansers",
    price: 10.99,
    image: "/micellar-water-bottle-minimal.jpg",
    description: "Micellar water for gentle cleansing",
    size: "200ml",
    rating: 4.4,
    reviews: 134,
    ingredients: ["Micellar Technology", "Rose Water", "Glycerin"],
    benefits: ["No Rinse", "All Skin Types", "Refreshing"],
  },
  {
    id: "5",
    name: "Cream Cleanser",
    category: "Cleansers",
    price: 12.99,
    image: "/cream-cleanser-bottle-pink.jpg",
    description: "Creamy cleanser for dry and sensitive skin",
    size: "150ml",
    rating: 4.8,
    reviews: 189,
    ingredients: ["Coconut Oil", "Almond Oil", "Calendula"],
    benefits: ["Extra Gentle", "Moisturizing", "Soothing"],
  },
  {
    id: "6",
    name: "Exfoliating Scrub",
    category: "Exfoliators",
    price: 14.99,
    image: "/exfoliating-scrub-natural.jpg",
    description: "Natural exfoliating scrub for smooth skin",
    size: "75ml",
    rating: 4.5,
    reviews: 167,
    ingredients: ["Bamboo Extract", "Apricot Seeds", "Vitamin C"],
    benefits: ["Gentle Exfoliation", "Brightening", "Smoothing"],
  },
  {
    id: "7",
    name: "Night Serum",
    category: "Serums",
    price: 24.99,
    image: "/night-serum-dropper-bottle.jpg",
    description: "Intensive night serum for skin renewal",
    size: "30ml",
    rating: 4.9,
    reviews: 245,
    ingredients: ["Retinol", "Peptides", "Niacinamide"],
    benefits: ["Anti-aging", "Firming", "Brightening"],
  },
  {
    id: "8",
    name: "Eye Cream",
    category: "Eye Care",
    price: 18.99,
    image: "/eye-cream-jar-minimal.jpg",
    description: "Hydrating eye cream reduces dark circles",
    size: "15ml",
    rating: 4.6,
    reviews: 198,
    ingredients: ["Caffeine", "Vitamin K", "Hyaluronic Acid"],
    benefits: ["Reduces Puffiness", "Brightening", "Hydrating"],
  },
]

export const categories = ["All Products", "Cleansers", "Moisturizers", "Serums", "Exfoliators", "Eye Care"]
