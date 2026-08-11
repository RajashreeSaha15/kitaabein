import { BookOpen, Award, Users, Home, Info, Package, Mail, Star } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

import BP1 from "./BP1.png";
import BP2 from "./BP2.png";
import BP3 from "./BP3.png";
import BP4 from "./BP4.png";
import BP5 from "./BP5.png";
import BP6 from "./BP6.png";
import BP7 from "./BP7.png";
import BP8 from "./BP8.png";
import BP9 from "./BP9.png";
import BP10 from "./BP10.png";
import BP11 from "./BP11.png";
import BP12 from "./BP12.png";
import BP13 from "./BP13.png";
import BP14 from "./BP14.png";
import BP15 from "./BP15.png";
import BP16 from "./BP16.png";

import Book1 from "../assets/Book1.png"
import Book2 from "../assets/Book2.png"
import Book3 from "../assets/Book3.png"
import Book4 from "../assets/Book4.png"
import Book5 from "../assets/Book5.png"
import Book6 from "../assets/Book6.png"
import Book7 from "../assets/Book7.png"
import Book8 from "../assets/Book8.png"

import HB1 from "../assets/HB1.png"
import HB2 from "../assets/HB2.png"
import HB3 from "../assets/HB3.png"
import HB4 from "../assets/HB4.png"

import HA1 from "../assets/HA1.png"
import HA2 from "../assets/HA2.png"
import HA3 from "../assets/HA3.png"

import A from "../assets/Ahmedabad.jpg"
import C from "../assets/Chandigarh.jpg"
import I from "../assets/Indore.jpg"
import N from "../assets/Nagpur.jpg"
import A1 from "../assets/A1.png"
import A2 from "../assets/A2.png"
import A3 from "../assets/A3.png"

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "399",
    description: "A portrait of the Jazz Age in all of its decadence and excess, following the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.",
    image: BP1,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "450",
    description: "A powerful story of racial injustice and the loss of innocence, told through the eyes of young Scout Finch in a small Alabama town.",
    image: BP2,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: "399",
    description: "A dystopian novel about totalitarianism and mass surveillance, set in a world where the Party controls truth, language, and thought itself.",
    image: BP3,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "349",
    description: "A witty romantic novel of manners set in early 19th century England, centered on the spirited Elizabeth Bennet and the proud Mr. Darcy.",
    image: BP4,
  },
  {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: "599",
    description: "A sweeping look at how Homo sapiens came to dominate the planet, tracing the cognitive, agricultural, and scientific revolutions that shaped us.",
    image: BP5,
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    price: "499",
    description: "A practical guide to building good habits and breaking bad ones through small, consistent changes that compound over time.",
    image: BP6,
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "349",
    description: "A philosophical tale of a young Andalusian shepherd who journeys to Egypt in search of treasure, discovering the meaning of his own destiny along the way.",
    image: BP7,
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    price: "499",
    description: "A memoir of growing up in a strict survivalist family in rural Idaho and the author's remarkable journey from isolation to a Cambridge doctorate.",
    image: BP8,
  },
  {
    id: 9,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: "399",
    description: "A candid, disillusioned account of teenager Holden Caulfield's wanderings through New York City after being expelled from prep school.",
    image: BP9,
  },
  {
    id: 10,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: "599",
    description: "A Nobel laureate's exploration of the two systems that drive human thought, revealing the biases and shortcuts behind everyday decision-making.",
    image: BP10,
  },
  {
    id: 11,
    title: "Brave New World",
    author: "Aldous Huxley",
    price: "399",
    description: "A dystopian vision of a future society engineered for stability and pleasure through genetic conditioning, consumerism, and the suppression of individuality.",
    image: BP11,
  },
  {
    id: 12,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    price: "349",
    description: "The moving personal diary of a Jewish teenager in hiding during the Nazi occupation of the Netherlands, offering an intimate account of hope amid horror.",
    image: BP12,
  },
  {
    id: 13,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: "450",
    description: "A psychological drama following an impoverished former student in St. Petersburg who commits murder and grapples with guilt, morality, and redemption.",
    image: BP13,
  },
  {
    id: 14,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    price: "599",
    description: "An authorized biography of the Apple co-founder, drawn from extensive interviews, tracing his rise, setbacks, and relentless drive for innovation.",
    image: BP14,
  },
  {
    id: 15,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "399",
    description: "A fantasy adventure following the reluctant hobbit Bilbo Baggins as he joins a company of dwarves on a quest to reclaim treasure guarded by a dragon.",
    image: BP15,
  },
  {
    id: 16,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    price: "499",
    description: "An accessible exploration of cosmology, covering the origins of the universe, black holes, and the search for a unified theory of physics.",
    image: BP16,
  },
];

export default books;

export const branches = [
  {
    city: "Mumbai",
    address: "12 Marine Drive Promenade",
    contact: "022-2345-6789",
    services: ["Sea View Reading Deck", "Author Events", "Café", "Rare Editions"]
  },
  {
    city: "Delhi",
    address: "45 Connaught Place",
    contact: "011-4567-8901",
    services: ["24/7 Access", "Digital Library", "Conference Rooms", "Book Launches"]
  },
  {
    city: "Bengaluru",
    address: "78 MG Road",
    contact: "080-2345-6789",
    services: ["Writing Workshops", "Book Clubs", "Co-Reading Spaces", "Audio Books"]
  },
  {
    city: "Kolkata",
    address: "23 Park Street",
    contact: "033-2234-5678",
    services: ["Heritage Book Collections", "Poetry Evenings", "Garden Reading Area", "Café"]
  },
  {
    city: "Chennai",
    address: "56 Anna Salai",
    contact: "044-2456-7890",
    services: ["Tamil Literature Corner", "Children's Corner", "Book Clubs", "Art Gallery"]
  },
  {
    city: "Jaipur",
    address: "89 Hawa Mahal Road",
    contact: "0141-234-5678",
    services: ["Curated Collections", "Rooftop Reading Nooks", "Author Events", "Handicraft Bookmarks Corner"]
  },
  {
    city: "Pune",
    address: "34 Fergusson College Road",
    contact: "020-2345-6789",
    services: ["Student Discounts", "Writing Workshops", "Reading Nooks", "Café"]
  },
  {
    city: "Hyderabad",
    address: "67 Banjara Hills Road",
    contact: "040-2345-6789",
    services: ["Digital Library", "Book Launches", "Conference Rooms", "Audio Books"]
  },
  {
    city: "Goa",
    address: "9 Calangute Beach Road",
    contact: "0832-234-5678",
    services: ["Beachside Reading", "Art Gallery", "Book Launches", "Live Music Evenings"]
  },
  {
    city: "Lucknow",
    address: "15 Hazratganj Market Road",
    contact: "0522-234-5678",
    services: ["Urdu & Hindi Literature Corner", "Rare Editions", "Author Events", "Reading Nooks"]
  }
];

export const teamMembers = [
  {
    name: "Ananya Rao",
    role: "Head of Book Selection",
    bio: "Decade-long journey in literary curation. Lover of magical realism",
    social: { facebook: "https://facebook.com/", twitter: "https://twitter.com/" },
    img: A1
  },
  {
    name: "Arjun Mehta",
    role: "Fiction & Fantasy Specialist",
    bio: "Sci-fi & fantasy specialist. Building worlds one book at a time",
    social: { facebook: "https://facebook.com/", twitter: "https://twitter.com/" },
    img: A2
  },
  {
    name: "Kavya Iyer",
    role: "Poetry Editor",
    bio: "Transforming words into emotional journeys. National Poetry Award winner",
    social: { facebook: "https://facebook.com/", twitter: "https://twitter.com/" },
    img: A3
  }
];

export const stats = [
  { icon: "FaHeart", title: "Happy Readers", value: "500K+" },
  { icon: "FaUsers", title: "Community Members", value: "50K+" },
  { icon: "FaAward", title: "Awards Won", value: "12" }
];


// OURBESTSELLER.JSX
export const bgColors = [
  "from-[#fce3ec] to-[#ffe8d4]",
  "from-[#e2f0cb] to-[#ffe6e6]",
  "from-[#d0e6f6] to-[#f3e5f5]",
  "from-[#fff1c1] to-[#ffd3b4]",
  "from-[#e1f7d5] to-[#ffccbc]",
  "from-[#f0f4c3] to-[#b2dfdb]",
  "from-[#ede7f6] to-[#e1bee7]",
  "from-[#dcedc8] to-[#fff9c4]",
]
export const obsbooks = [
  { id: 1, image: Book1, title: "The Kite Runner", author: "Khaled Hosseini", price: 599.00 },
  { id: 2, image: Book2, title: "The Hating Game", author: "Sally Thorne", price: 399.00 },
  { id: 3, image: Book3, title: "Beach Read", author: "Emily Henry", price: 450.00 },
  { id: 4, image: Book4, title: "Gone Girl", author: "Gillian Flynn", price: 399.00 },
  { id: 5, image: Book5, title: "Mystic River", author: "Dennis Lehane", price: 350.00 },
  { id: 6, image: Book6, title: "Life of Pi", author: "Yann Martel", price: 299.00 },
  { id: 7, image: Book7, title: "The Psychology of Money", author: "Morgan Housel", price: 399.00 },
  { id: 8, image: Book8, title: "The Life that's Waiting", author: "Brianna Wiest", price: 249.00 },
]

// HBBOOKS
export const hbbooks = [
  { id: 101, title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', price: 199.2, rating: 5, image: HB1 },
  { id: 102, title: 'Where the Crawdads Sing', author: 'Delia Owens', price: 399.2, rating: 5, image: HB2 },
  { id: 103, title: 'The Song of Achilles', author: 'Madeline Miller', price: 349.2, rating: 4, image: HB3 },
  { id: 104, title: 'Norwegian Wood', author: 'Haruki Murakami', price: 375.2, rating: 4, image: HB4 },
  { id: 105, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', price: 599.0, rating: 5, image: HB5 },
]



// HA DUMMY DATA
export const hastats = [
  { icon: BookOpen, value: "10K+", label: "Books Collection" },
  { icon: Users, value: "50K+", label: "Happy Readers" },
  { icon: Award, value: "15+", label: "Industry Awards" },
]

export const featuredBooks = [
  {
    image: HA1,
    title: "The White Tiger",
    author: "Aravind Adiga",
    description: "A darkly comic tale of ambition and class in modern India, told through the eyes of a driver determined to escape his servitude.",
  },
  {
    image: HA2,
    title: "Anne of Green Gables",
    author: "L.M. Montgomery",
    description: "The spirited, imaginative orphan Anne Shirley wins over a small Canadian farming community with her wit and boundless curiosity.",
  },
  {
    image: HA3,
    title: "The Book Thief",
    author: "Markus Zusak",
    description: "Narrated by Death, the story of a young girl in Nazi Germany who finds solace in stealing books and sharing them with those around her.",
  },
  {
    image: HA4,
    title: "Circe",
    author: "Madeline Miller",
    description: "A reimagining of the Greek myth of the sorceress Circe, following her exile, transformation, and defiance among gods and mortals.",
  },
]

// FOOTER
export const socialLinks = [
  { Icon: FaFacebook, url: "https://facebook.com/" },
  { Icon: FaTwitter, url: "https://twitter.com/" },
  { Icon: FaInstagram, url: "https://instagram.com/" },
  { Icon: FaYoutube, url: "https://youtube.com/" },
]

export const quickLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Books", url: "/books" },
  { title: "Contact", url: "/contact" },
]

// NAVBAR
export const navItems = [
  { name: "Home", path: "/", icon: Home, color: "from-cyan-400 to-blue-500" },
  { name: "About", path: "/about", icon: Info, color: "from-purple-400 to-indigo-500" },
  { name: "Books", path: "/books", icon: BookOpen, color: "from-emerald-400 to-teal-500" },
  { name: "Contact", path: "/contact", icon: Mail, color: "from-rose-400 to-pink-600" },
  // Add My Orders directly to navItems
  { 
    name: "My Orders", 
    path: "/orders", 
    icon: Package, 
    color: "from-violet-500 to-purple-600" 
  }
];

// BANNER
export const words = ["Narratives", "Perspectives", "Universes", "Visions", "Horizons"];
export const apstats = [
  { icon: Award, value: "25K+", label: "Awards Won" },
  { icon: Users, value: "1M+", label: "Active Readers" },
  { icon: BookOpen, value: "100K+", label: "Books Available" },
  { icon: Star, value: "4.9", label: "Average Rating" }
]

export const apteamMembers = [
  { id: 1, name: "Priya Sharma", position: "CEO & Founder", image: A1 },
  { id: 2, name: "Rohan Kapoor", position: "CTO", image: A2 },
  { id: 3, name: "Neha Desai", position: "Head Editor", image: A3 }
]

export const apbranches = [
  { location: "Ahmedabad", hours: "9AM - 9PM", image: A },
  { location: "Chandigarh", hours: "8AM - 8PM", image: C },
  { location: "Indore", hours: "10AM - 10PM", image: I },
  { location: "Nagpur", hours: "8AM - 8PM", image: N }
]