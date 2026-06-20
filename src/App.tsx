import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Mountain,
  Send,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Plane,
  Play,
  Compass,
  Heart,
  Shield,
  ChevronDown,
  Users,
  Calendar,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Award,
  Camera,
  Building,
  Wifi,
  Car,
  Utensils,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const destinations = [
  {
    id: 1,
    name: 'Kashmir',
    subtitle: 'Paradise on Earth',
    duration: '6D / 5N',
    price: 22999,
    rating: 4.9,
    reviews: 312,
    tag: 'Best Seller',
    category: 'Himalayan',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    description: 'Glide on shikaras, walk through saffron fields and witness snow-draped valleys that inspired poets for centuries.',
  },
  {
    id: 2,
    name: 'Leh Ladakh',
    subtitle: 'Land of High Passes',
    duration: '8D / 7N',
    price: 34999,
    rating: 5.0,
    reviews: 278,
    tag: 'Top Rated',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Magnetic Hill', 'Khardung La'],
    description: 'Ride across the world\'s highest motorable roads, camp beside turquoise lakes and discover ancient monasteries.',
  },
  {
    id: 3,
    name: 'Manali',
    subtitle: 'Valley of the Gods',
    duration: '5D / 4N',
    price: 16999,
    rating: 4.8,
    reviews: 445,
    tag: 'Popular',
    category: 'Himalayan',
    image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Rohtang Pass', 'Solang Valley', 'Hadimba Temple', 'Kullu'],
    description: 'Snow sports, pine forests, apple orchards and thrilling treks — Manali is the quintessential Himalayan escape.',
  },
  {
    id: 4,
    name: 'Kasol',
    subtitle: 'Mini Israel of India',
    duration: '4D / 3N',
    price: 11999,
    rating: 4.7,
    reviews: 198,
    tag: 'Trending',
    category: 'Nature',
    image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Parvati River', 'Kheerganga Trek', 'Rasol', 'Chalal'],
    description: 'A tranquil riverside hamlet cradled in the Parvati Valley, known for its bohemian culture and forest trails.',
  },
  {
    id: 5,
    name: 'Manikaran',
    subtitle: 'Holy Hot Springs',
    duration: '3D / 2N',
    price: 9999,
    rating: 4.6,
    reviews: 134,
    tag: 'Spiritual',
    category: 'Spiritual',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Hot Springs', 'Gurudwara', 'Ram Temple', 'Parvati Valley'],
    description: 'Sacred geothermal springs, ancient gurudwaras and temples nestled in the stunning Parvati river gorge.',
  },
  {
    id: 6,
    name: 'Shimla',
    subtitle: 'Queen of Hills',
    duration: '4D / 3N',
    price: 13999,
    rating: 4.8,
    reviews: 521,
    tag: 'Classic',
    category: 'Hill Station',
    image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Mall Road', 'Ridge', 'Kufri', 'Christ Church'],
    description: 'Colonial architecture, toy-train rides and cedar-scented air — Shimla is timeless charm in the Shivaliks.',
  },
  {
    id: 7,
    name: 'McLeod Ganj',
    subtitle: 'Little Lhasa',
    duration: '4D / 3N',
    price: 12999,
    rating: 4.8,
    reviews: 267,
    tag: 'Cultural',
    category: 'Cultural',
    image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Dalai Lama Temple', 'Bhagsu Falls', 'Triund Trek', 'Tibetan Market'],
    description: 'Home to the Dalai Lama, a vibrant Tibetan culture, misty mountains and the iconic Triund ridge.',
  },
  {
    id: 8,
    name: 'Dharamshala',
    subtitle: 'Abode of Dharma',
    duration: '4D / 3N',
    price: 12499,
    rating: 4.7,
    reviews: 189,
    tag: 'Peaceful',
    category: 'Cultural',
    image: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Cricket Stadium', 'War Memorial', 'Dal Lake', 'Kangra Fort'],
    description: 'Nestled beneath the Dhauladhar range — a serene blend of Tibetan spirituality and Himachali heritage.',
  },
  {
    id: 9,
    name: 'Kasauli',
    subtitle: 'The Colonial Retreat',
    duration: '3D / 2N',
    price: 10999,
    rating: 4.6,
    reviews: 112,
    tag: 'Offbeat',
    category: 'Hill Station',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Monkey Point', 'Kasauli Brewery', 'Christ Church', 'Sunset Point'],
    description: 'Quiet Colonial lanes, Victorian homes and panoramic Himalayan sunsets in a hill station that time forgot.',
  },
  {
    id: 10,
    name: 'Chail',
    subtitle: 'Serenity in the Pines',
    duration: '3D / 2N',
    price: 11499,
    rating: 4.5,
    reviews: 89,
    tag: 'Offbeat',
    category: 'Nature',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ["World's Highest Cricket Ground", 'Chail Palace', 'Sanctuary', 'Sidh Baba Temple'],
    description: 'A former royal retreat with the world\'s highest cricket ground, dense forests and crystal-clear air.',
  },
  {
    id: 11,
    name: 'Dalhousie',
    subtitle: 'The Scottish Hill Station',
    duration: '4D / 3N',
    price: 13499,
    rating: 4.7,
    reviews: 156,
    tag: 'Romantic',
    category: 'Hill Station',
    image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Khajjiar', 'Dainkund Peak', 'Kalatop', 'St. John\'s Church'],
    description: 'Rolling meadows, gurgling streams and Gothic churches make Dalhousie a dreamy highland escape.',
  },
  {
    id: 12,
    name: 'Kinnaur',
    subtitle: 'Land of Gods & Apples',
    duration: '6D / 5N',
    price: 21999,
    rating: 4.8,
    reviews: 143,
    tag: 'Scenic',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Sangla Valley', 'Chitkul', 'Kalpa', 'Recong Peo'],
    description: 'Apple orchards clinging to vertiginous cliffs, ancient temples and rivers you can hear roaring from miles away.',
  },
  {
    id: 13,
    name: 'Kaza',
    subtitle: 'Cold Desert Marvel',
    duration: '7D / 6N',
    price: 26999,
    rating: 4.9,
    reviews: 167,
    tag: 'Adventure',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Ki Monastery', 'Hikkim', 'Langza', 'Pin Valley'],
    description: 'The last town before the Tibetan plateau — fossil beaches, ancient gompas and the milky way overhead.',
  },
  {
    id: 14,
    name: 'Spiti Valley',
    subtitle: 'Middle Land',
    duration: '8D / 7N',
    price: 29999,
    rating: 5.0,
    reviews: 201,
    tag: 'Top Rated',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Chandratal Lake', 'Dhankar', 'Tabo Monastery', 'Komic Village'],
    description: 'Dramatic moonscapes, turquoise lakes at 4400m and one of the oldest Buddhist monasteries on earth.',
  },
  {
    id: 15,
    name: 'Yulla Kanda',
    subtitle: 'Hidden Himalayan Gem',
    duration: '3D / 2N',
    price: 9499,
    rating: 4.6,
    reviews: 54,
    tag: 'Hidden Gem',
    category: 'Nature',
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Meadows', 'Forest Trails', 'Panoramic Views', 'Camping'],
    description: 'An untouched alpine meadow carpeted in wildflowers — perfect for those who seek trails, not crowds.',
  },
  {
    id: 16,
    name: 'Krishna Heights Temple',
    subtitle: 'Divine Mountain Shrine',
    duration: '2D / 1N',
    price: 6999,
    rating: 4.7,
    reviews: 78,
    tag: 'Spiritual',
    category: 'Spiritual',
    image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Temple Trek', 'Mountain Views', 'Rituals', 'Sunrise Darshan'],
    description: 'A sacred mountain temple where spirituality meets the sublime — offering breathtaking sunrises and peace.',
  },
  {
    id: 17,
    name: 'Delhi',
    subtitle: 'Heart of India',
    duration: '3D / 2N',
    price: 8999,
    rating: 4.5,
    reviews: 634,
    tag: 'Classic',
    category: 'City',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Red Fort', 'Qutub Minar', 'India Gate', 'Lotus Temple'],
    description: 'Seven cities layered over millennia — from Mughal grandeur and colonial relics to neon-lit street food lanes.',
  },
  {
    id: 18,
    name: 'Jaipur',
    subtitle: 'The Pink City',
    duration: '4D / 3N',
    price: 14999,
    rating: 4.8,
    reviews: 489,
    tag: 'Best Seller',
    category: 'Cultural',
    image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Amer Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
    description: 'Rose-pink palaces, elephant rides up hill forts and bazaars fragrant with spices — Rajasthan royalty awaits.',
  },
  {
    id: 19,
    name: 'Goa',
    subtitle: 'Sun, Sea & Soul',
    duration: '5D / 4N',
    price: 18999,
    rating: 4.7,
    reviews: 723,
    tag: 'Popular',
    category: 'Beach',
    image: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Baga Beach', 'Old Goa Churches', 'Dudhsagar Falls', 'Anjuna Flea Market'],
    description: 'Golden sands, Portuguese churches, spice plantations and beach shacks that serve the best seafood in India.',
  },
  {
    id: 20,
    name: 'Dehradun',
    subtitle: 'Gateway to the Garhwal',
    duration: '3D / 2N',
    price: 9999,
    rating: 4.6,
    reviews: 211,
    tag: 'Popular',
    category: 'Nature',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Robber\'s Cave', 'Sahastradhara', 'Forest Research Institute', 'Tapkeshwar'],
    description: 'A breezy Doon Valley ringed by the Shivaliks — the ideal launchpad for Mussoorie, Haridwar and Rishikesh.',
  },
  {
    id: 21,
    name: 'Rishikesh',
    subtitle: 'Yoga Capital of the World',
    duration: '4D / 3N',
    price: 12999,
    rating: 4.9,
    reviews: 567,
    tag: 'Trending',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['River Rafting', 'Laxman Jhula', 'Beatles Ashram', 'Bungee Jumping'],
    description: 'White-water rafting, cliff diving, sunrise yoga by the Ganges — spiritual bliss meets pure adrenaline.',
  },
  {
    id: 22,
    name: 'Andaman & Nicobar Islands',
    subtitle: 'Tropical Archipelago',
    duration: '5D / 4N',
    price: 27999,
    rating: 4.8,
    reviews: 312,
    tag: 'Beach',
    category: 'Beach',
    image: 'https://images.pexels.com/photos/4578823/pexels-photo-4578823.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Radhanagar Beach', 'Havelock Island', 'Cellular Jail', 'Scuba Diving'],
    description: 'Pristine beaches, coral reefs and colonial reminiscence — an island escape rich in marine life and history.',
  },
  {
    id: 23,
    name: 'Kerala',
    subtitle: "God's Own Country",
    duration: '6D / 5N',
    price: 19999,
    rating: 4.8,
    reviews: 520,
    tag: 'Popular',
    category: 'Backwaters',
    image: 'https://images.pexels.com/photos/256447/pexels-photo-256447.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Kochi Fort', 'Periyar Wildlife Sanctuary'],
    description: 'Lush backwaters, rolling tea hills and spice-scented streets — Kerala is a tranquil blend of nature and culture.',
  },
];

const categories = ['All', 'Himalayan', 'Adventure', 'Nature', 'Hill Station', 'Cultural', 'Spiritual', 'Beach', 'City'];

const stats = [
  { number: '15+', label: 'Years Experience', icon: Award },
  { number: '10K+', label: 'Happy Travelers', icon: Heart },
  { number: '200+', label: 'Destinations', icon: MapPin },
  { number: '50+', label: 'Expert Guides', icon: Compass },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    text: 'The Spiti Valley trip was life-changing. Every single detail was perfectly arranged and the guide was phenomenal!',
    rating: 5,
    avatar: 'RS',
  },
  {
    name: 'Priya Mehta',
    location: 'Mumbai',
    text: 'Kashmir exceeded every expectation. The houseboat stay and shikara rides were pure magic. Highly recommend!',
    rating: 5,
    avatar: 'PM',
  },
  {
    name: 'Arjun Singh',
    location: 'Bangalore',
    text: 'Leh Ladakh with Him Yatra was flawless. The team handled altitude sickness precautions so professionally.',
    rating: 5,
    avatar: 'AS',
  },
];

const hotels = [
  {
    id: 1,
    name: 'The Himalayan Retreat',
    location: 'Manali',
    rating: 4.9,
    reviews: 324,
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Spa', 'Restaurant', 'Parking'],
    type: 'Luxury Resort',
    description: 'Nestled in the Beas Valley with panoramic snow-capped views and world-class spa facilities.',
  },
  {
    id: 2,
    name: 'Dal Lake Houseboats',
    location: 'Srinagar, Kashmir',
    rating: 4.8,
    reviews: 456,
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Lake View', 'Traditional Cuisine', 'Shikara Rides'],
    type: 'Heritage Houseboat',
    description: 'Authentic Kashmiri houseboats with carved walnut interiors floating on the iconic Dal Lake.',
  },
  {
    id: 3,
    name: 'Spiti Mountain Lodge',
    location: 'Kaza, Spiti Valley',
    rating: 4.7,
    reviews: 189,
    image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Heated Rooms', 'Organic Meals', 'Stargazing Deck'],
    type: 'Boutique Lodge',
    description: 'Eco-friendly mountain lodge with oxygen backup and hot meals at 12,000 ft altitude.',
  },
  {
    id: 4,
    name: 'The Grand Jaipur',
    location: 'Jaipur, Rajasthan',
    rating: 4.9,
    reviews: 567,
    image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Pool', 'Spa', 'Rooftop Restaurant', 'Heritage Tours'],
    type: 'Heritage Palace Hotel',
    description: 'A restored Rajputana palace with intricate frescoes, courtyards and royal Rajasthani hospitality.',
  },
  {
    id: 5,
    name: 'Goa Beach Villas',
    location: 'Candolim, Goa',
    rating: 4.8,
    reviews: 432,
    image: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Beach Access', 'Pool', 'Kitchen', 'Bikes'],
    type: 'Private Villa',
    description: 'Stylish beachfront villas with private pool, perfect for families and groups seeking privacy.',
  },
  {
    id: 6,
    name: 'Rishikesh Riverside Camp',
    location: 'Rishikesh, Uttarakhand',
    rating: 4.7,
    reviews: 278,
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['River View', 'Bonfire', 'Adventure Activities'],
    type: 'Adventure Camp',
    description: 'Tented luxury camp on the Ganges with rafting, cliff jumping and daily yoga sessions.',
  },
  {
    id: 7,
    name: 'Shimla Heritage Inn',
    location: 'Shimla',
    rating: 4.6,
    reviews: 234,
    image: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Fireplace', 'Mountain View', 'Toy Train'],
    type: 'Colonial Heritage',
    description: 'A restored colonial bungalow with period furniture and stunning Himalayan sunrises.',
  },
  {
    id: 8,
    name: 'Leh Boutique Hotel',
    location: 'Leh, Ladakh',
    rating: 4.8,
    reviews: 312,
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['Oxygen Rooms', 'Heated', 'Garden', 'Monastery Tours'],
    type: 'Boutique Hotel',
    description: 'Modern Ladakhi hospitality with traditional architecture and all altitude-comfort amenities.',
  },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

const weddingGallery = [
  '/images/weddings/photo1.jpeg',
  '/images/weddings/photo2.jpeg',
  '/images/weddings/photo3.jpeg',
  '/images/weddings/photo4.jpeg',
  '/images/weddings/photo5.jpeg',
  '/images/weddings/photo6.jpeg',
  '/images/weddings/photo7.jpeg',
  '/images/weddings/photo8.jpeg',
  '/images/weddings/photo9.jpeg',
];

function useIntersectionObserver(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
}

function PackageCard({ pkg, onEnquire }: { pkg: typeof destinations[0]; onEnquire: (name: string) => void }) {
  const [hovered, setHovered] = useState(false);
  const tagColors: Record<string, string> = {
    'Best Seller': 'bg-amber-500 text-white',
    'Top Rated': 'bg-emerald-500 text-white',
    'Popular': 'bg-sky-500 text-white',
    'Trending': 'bg-rose-500 text-white',
    'Spiritual': 'bg-violet-500 text-white',
    'Classic': 'bg-gray-600 text-white',
    'Cultural': 'bg-orange-500 text-white',
    'Peaceful': 'bg-teal-500 text-white',
    'Offbeat': 'bg-pink-500 text-white',
    'Romantic': 'bg-rose-400 text-white',
    'Scenic': 'bg-cyan-600 text-white',
    'Adventure': 'bg-red-500 text-white',
    'Hidden Gem': 'bg-purple-500 text-white',
  };

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={pkg.image}
          alt={pkg.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Tag */}
        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[pkg.tag] ?? 'bg-gray-500 text-white'}`}>
          {pkg.tag}
        </span>

        {/* Bottom overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-display text-xl font-bold leading-tight">{pkg.name}</h3>
          <p className="text-white/80 text-sm">{pkg.subtitle}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-800 text-sm">{pkg.rating}</span>
            <span className="text-gray-400 text-xs">({pkg.reviews})</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{pkg.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="text-xs bg-primary-50 text-primary-700 border border-primary-100 px-2.5 py-1 rounded-full font-medium">
              {h}
            </span>
          ))}
          {pkg.highlights.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">+{pkg.highlights.length - 3}</span>
          )}
        </div>

        <button
          onClick={() => onEnquire(pkg.name)}
          className="mt-auto w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl font-semibold text-sm hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-primary-500/30 hover:shadow-lg"
        >
          Enquire Now
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

function HotelCard({ hotel, onEnquire }: { hotel: typeof hotels[0]; onEnquire: (name: string) => void }) {
  const [hovered, setHovered] = useState(false);

  const amenityIcons: Record<string, React.ReactNode> = {
    'WiFi': <Wifi className="w-3.5 h-3.5" />,
    'Spa': <Heart className="w-3.5 h-3.5" />,
    'Restaurant': <Utensils className="w-3.5 h-3.5" />,
    'Parking': <Car className="w-3.5 h-3.5" />,
  };

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={hotel.image}
          alt={hotel.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Type Badge */}
        <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 text-gray-800 backdrop-blur-sm">
          {hotel.type}
        </span>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-semibold text-gray-800 text-sm">{hotel.rating}</span>
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-display text-lg font-bold leading-tight">{hotel.name}</h3>
          <p className="text-white/80 text-sm flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {hotel.location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{hotel.description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-5">
          {hotel.amenities.slice(0, 4).map((amenity, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs bg-primary-50 text-primary-700 border border-primary-100 px-2.5 py-1 rounded-full font-medium"
            >
              {amenityIcons[amenity] || <Building className="w-3.5 h-3.5" />}
              {amenity}
            </span>
          ))}
        </div>

        <button
          onClick={() => onEnquire(hotel.name)}
          className="mt-auto w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 rounded-xl font-semibold text-sm hover:from-accent-600 hover:to-accent-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-accent-500/30 hover:shadow-lg"
        >
          Book Hotel
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [activeSection, setActiveSection] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', destination: '', travelDate: '', travelers: '1', message: '',
  });

  const GOOGLE_SCRIPT_URL = '';

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Discover Kashmir',
      subtitle: 'Paradise on Earth',
    },
    {
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Conquer Ladakh',
      subtitle: 'Land of High Passes',
    },
    {
      image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Explore Spiti',
      subtitle: 'The Middle Land',
    },
  ];

  // Hero auto-slide
  useEffect(() => {
    const t = setInterval(() => setHeroIndex(i => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Testimonials auto-slide
  useEffect(() => {
    const t = setInterval(() => setCurrentTestimonial(i => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // lock body scroll when modal is open and allow ESC to close
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
        setActiveVideo(null);
      }
    };

    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKey);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [modalOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required.';
    if (!formData.email.trim()) errors.email = 'Email address is required.';
    if (!formData.destination.trim()) errors.destination = 'Please select a destination.';
    if (!formData.travelDate.trim()) errors.travelDate = 'Please choose a travel date.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // focus first invalid field optionally
      const firstKey = Object.keys(errors)[0];
      const el = document.querySelector(`[name="${firstKey}"]`) as HTMLElement | null;
      el?.focus();
      return;
    }

    // Build the WhatsApp message exactly as required
    const message = `🌍 New Tour Inquiry\n\n👤 Full Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n📍 Destination: ${formData.destination}\n📅 Travel Date: ${formData.travelDate}\n👥 Travelers: ${formData.travelers}\n📝 Special Requirements: ${formData.message || 'N/A'}`;

    const waUrl = waLink(message);

    try {
      setIsSubmitting(true);
      // small delay so the UI shows the redirecting state
      await new Promise(r => setTimeout(r, 250));
      // open WhatsApp in a new tab
      window.open(waUrl, '_blank');

      // also preserve existing behaviour: send to GOOGLE_SCRIPT_URL if configured
      if (GOOGLE_SCRIPT_URL) {
        try {
          await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, timestamp: new Date().toISOString(), channel: 'whatsapp' }),
          });
        } catch (err) {
          // non-blocking
          console.error('Google script submit failed', err);
        }
      } else {
        // simulate network latency for better UX
        await new Promise(r => setTimeout(r, 800));
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', destination: '', travelDate: '', travelers: '1', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnquire = useCallback((name: string) => {
    setFormData(prev => ({ ...prev, destination: name }));
    scrollToSection('contact');
  }, [scrollToSection]);

  const filteredDestinations = destinations.filter(d => {
    const matchCat = activeCategory === 'All' || d.category === activeCategory;
    const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const navItems = ['home', 'packages', 'hotels', 'weddings', 'about', 'contact'];

  const waLink = (text: string) => `https://wa.me/919817153799?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">

      {/* ─── Navigation ─────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className={`font-display text-lg font-bold leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Him Yatra</p>
              <p className={`text-xs font-medium leading-none mt-0.5 ${isScrolled ? 'text-primary-600' : 'text-white/70'}`}>Holidays</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium text-sm relative group ${isScrolled ? (activeSection === item ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600') : (activeSection === item ? 'text-white' : 'text-white/80 hover:text-white')}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919817153799" className={`flex items-center gap-1.5 text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
              <Phone className="w-4 h-4" />
              <span>+91 98171 53799</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(v => !v)}>
            {mobileMenuOpen
              ? <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-gray-100 px-4 py-5 space-y-3">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left capitalize font-medium text-gray-700 hover:text-primary-600 py-2 border-b border-gray-50">
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full font-semibold mt-2">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero ───────────────────────────────────────────────────────────── */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${i === heroIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Slide dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`transition-all duration-300 rounded-full ${i === heroIndex ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${5 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-sm font-medium">Crafting Himalayan Dreams Since 2008</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="block hero-title-line">{heroSlides[heroIndex].title}</span>
            <span className="block bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent mt-1">
              {heroSlides[heroIndex].subtitle}
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            23 handpicked destinations across the Himalayas and India — personalised itineraries, expert guides, memories forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('packages')}
              className="group bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <Compass className="w-5 h-5" />
              Explore 23 Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://wa.me/919817153799?text=Hello%2C%20I%20would%20like%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/15 transition-all duration-300 flex items-center gap-2"
              aria-label="Message us on WhatsApp for a free consultation"
            >
              <Phone className="w-5 h-5" />
              Free Consultation
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/50" />
        </div>
      </section>

      {/* ─── Stats ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 py-14 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute -right-20 bottom-0 w-72 h-72 bg-accent-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimatedSection key={i} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-1">{s.number}</p>
                  <p className="text-primary-300 font-medium text-sm">{s.label}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Packages ───────────────────────────────────────────────────────── */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-4">
                <TrendingUp className="w-4 h-4 text-primary-600" />
                <span className="text-primary-700 text-sm font-semibold">23 Destinations Available</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Tour Packages
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                From alpine meadows to royal forts — find the perfect trip for your soul.
              </p>
            </div>
          </AnimatedSection>

          {/* Search & Filter Bar */}
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations, highlights..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm shadow-sm"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-800">{filteredDestinations.length}</span> packages
              {searchQuery && <> for "<span className="text-primary-600">{searchQuery}</span>"</>}
            </p>
          </div>

          {/* Grid */}
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No packages found. Try a different search.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 text-primary-600 font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map((pkg, i) => (
                <div
                  key={pkg.id}
                  className="animate-card-in"
                  style={{ animationDelay: `${(i % 8) * 60}ms` }}
                >
                  <PackageCard pkg={pkg} onEnquire={handleEnquire} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Hotels ─────────────────────────────────────────────────────────── */}
      <section id="hotels" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-100 rounded-full px-4 py-1.5 mb-4">
                <Building className="w-4 h-4 text-accent-600" />
                <span className="text-accent-700 text-sm font-semibold">Premium Stays</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Partner Hotels
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Hand-picked accommodations from luxury resorts to heritage houseboats — comfort at every destination.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hotels.map((hotel, i) => (
              <div
                key={hotel.id}
                className="animate-card-in"
                style={{ animationDelay: `${(i % 8) * 60}ms` }}
              >
                <HotelCard hotel={hotel} onEnquire={handleEnquire} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Us ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-accent-400 font-semibold tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Travel with Confidence</h2>
              <p className="text-primary-300 max-w-xl mx-auto">We handle every detail so you can focus on the experience.</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Safe & Secure', desc: '24/7 on-trip support, safety briefings and vetted accommodation.' },
              { icon: Heart, title: 'Best Value', desc: 'Price-match guarantee with no hidden costs — ever.' },
              { icon: Plane, title: 'Seamless Booking', desc: 'Book in minutes with flexible EMI and full-refund options.' },
              { icon: Compass, title: 'Expert Local Guides', desc: 'Passionate guides who know every trail, temple and tale.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={i}>
                  <div className="bg-white/8 border border-white/10 rounded-2xl p-7 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-accent-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-primary-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">Traveler Stories</p>
              <h2 className="font-display text-4xl font-bold text-gray-900">What Our Guests Say</h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i === currentTestimonial ? 'block' : 'hidden'}`}
                >
                  <div className="p-10 md:p-14 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold">
                        {t.avatar}
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-gray-900">{t.name}</p>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3" />{t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => setCurrentTestimonial(i => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`transition-all duration-300 rounded-full ${i === currentTestimonial ? 'w-6 h-2.5 bg-primary-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-primary-400'}`}
                />
              ))}
              <button
                onClick={() => setCurrentTestimonial(i => (i + 1) % testimonials.length)}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ──────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl blur-2xl opacity-50" />
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="About Him Yatra"
                    className="rounded-2xl shadow-2xl w-full object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">10,000+</p>
                        <p className="text-gray-400 text-sm">Happy Travelers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Crafting Himalayan Dreams Since 2008
              </h2>
              <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                Him Yatra Holidays was born from a single conviction — that everyone deserves to stand atop a Himalayan pass, float on a mountain lake and return home changed forever.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With 15+ years of expertise across Himachal Pradesh, Jammu & Kashmir, Uttarakhand and beyond, we design every journey around you — your pace, your budget, your dream.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, text: 'Ministry of Tourism Certified' },
                  { icon: Shield, text: '24/7 On-Trip Support' },
                  { icon: Heart, text: 'Personalised Itineraries' },
                  { icon: Star, text: '4.9 Average Rating' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Destination Weddings ───────────────────────────────────────────── */}
      <section id="weddings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-xl" style={{ backgroundImage: `url('https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="relative px-6 py-24 lg:py-32">
                <div className="max-w-3xl">
                  <p className="text-amber-300 font-semibold uppercase tracking-widest text-sm mb-3">Weddings</p>
                  <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4">Dream Destination Weddings</h2>
                  <p className="text-white/95 text-lg md:text-xl mb-6">Celebrate your special day at India's most beautiful destinations.</p>
                  <a href={waLink('Hello, I would like a wedding quote')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:-translate-y-1">
                    <Camera className="w-5 h-5" />
                    Get Wedding Quote
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ─── Our Wedding Gallery ───────────────────────────────────────── */}
          {/* Wedding Highlights (Videos) */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900">Wedding Highlights</h3>
                  <p className="text-gray-500 max-w-2xl mx-auto mt-2">Short highlight reels capturing unforgettable moments.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {['/images/weddings/video1.mp4','/images/weddings/video2.mp4','/images/weddings/video3.mp4','/images/weddings/video4.mp4','/images/weddings/video5.mp4'].map((v, idx) => (
                    <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-50 group">
                      <video
                        src={v}
                        playsInline
                        muted
                        autoPlay
                        loop
                        className="w-full h-64 object-cover block"
                        aria-hidden
                      />
                      <button
                        onClick={() => { setActiveVideo(v); setModalOpen(true); }}
                        className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-colors flex items-center justify-center"
                        aria-label={`Play highlight ${idx + 1}`}
                      >
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                            <Play className="w-6 h-6 text-primary-700" />
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="text-center mb-8">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900">Our Wedding Gallery</h3>
                  <p className="text-gray-500 max-w-2xl mx-auto mt-3">Capturing unforgettable moments at India's most beautiful destination wedding venues.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {weddingGallery.map((u, i) => {
                    const isVideo = /\.(mp4|webm|ogg)$/i.test(u);
                    return (
                      <div key={i} className="overflow-hidden rounded-xl shadow-lg bg-gray-50">
                        <div className="w-full h-56 bg-gray-100">
                          {isVideo ? (
                            <video
                              src={u}
                              controls
                              playsInline
                              muted
                              autoPlay
                              loop
                              className="w-full h-full object-cover block"
                            />
                          ) : (
                            <img src={u} alt={`Wedding ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </section>

          <AnimatedSection>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Mussoorie', img: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg', desc: 'Hilltop vows with panoramic Himalayan views.', venue: 'Luxury Mountain Resort' },
                { name: 'Dehradun', img: 'https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg', desc: 'Elegant valley ceremonies in refined estates.', venue: 'Heritage Valley Estate' },
                { name: 'Rishikesh', img: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg', desc: 'Riverside weddings with spiritual charm.', venue: 'Ganges Riverside Lawn' },
                { name: 'Jim Corbett', img: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg', desc: 'Wildlife-rich private estates for intimate celebrations.', venue: 'Private Jungle Lodge' },
                { name: 'Kasauli', img: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg', desc: 'Colonial charm and secluded hillsides.', venue: 'Colonial Heritage Villa' },
                { name: 'Chail', img: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg', desc: 'Royal retreats surrounded by alpine forests.', venue: 'Royal Pine Estate' },
                { name: 'Kufri', img: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg', desc: 'Snow-kissed wedding backdrops.', venue: 'Snowview Luxury Resort' },
                { name: 'Mashobra', img: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg', desc: 'Private apple orchards and serene cottages.', venue: 'Orchard Estate' },
                { name: 'Goa', img: 'https://images.pexels.com/photos/1002348/pexels-photo-1002348.jpeg', desc: 'Beachfront celebrations with sunset vows.', venue: 'Beachfront Luxury Villas' },
                { name: 'Jaipur', img: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg', desc: 'Royal palaces and grand courtyards.', venue: 'Heritage Palace Banquet' },
                { name: 'Ranthambore', img: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg', desc: 'Dramatic fort settings and wilderness charm.', venue: 'Fortside Private Venue' },
                { name: 'Udaipur', img: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg', desc: 'Lake-palace romance and candlelit ghats.', venue: 'Lake Palace Resort' },
              ].map((d, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${d.img}?auto=compress&cs=tinysrgb&w=1200')` }} />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-1">{d.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{d.desc}</p>
                    <p className="text-gray-700 font-medium mb-4">Luxury Venue: <span className="font-normal">{d.venue}</span></p>
                    <a href={waLink(`Hello, I would like a wedding quote for ${d.name}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full font-semibold transition-transform hover:-translate-y-0.5">
                      <Plane className="w-4 h-4" />
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">Why Choose Us For Your Wedding?</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Luxury Venues','Complete Event Planning','Hotel & Guest Management','Transportation Services','Photography & Decoration','24/7 Support'].map((s, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">{s}</p>
                        <p className="text-gray-500 text-sm">Premium service tailored to your needs.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ...existing code continues (gallery moved above) ... */}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-16">
              <h3 className="font-display text-3xl font-bold text-gray-900 mb-6">Real Weddings — Happy Couples</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[{
                  name: 'Anjali & Rohit', location: 'Udaipur', text: 'Our lake-palace wedding was flawless. Him Yatra handled everything — vendors, timeline and VIP guests.', rating: 5
                },{
                  name: 'Priya & Sameer', location: 'Goa', text: 'A beachfront ceremony turned into the dreamiest weekend for family and friends.', rating: 5
                },{
                  name: 'Neha & Arjun', location: 'Jim Corbett', text: 'Intimate jungle wedding with perfect logistics and beautiful decor.', rating: 5
                }].map((t,i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center font-bold text-primary-600">{t.name.split(' ')[0][0]}{t.name.split('&')[1] ? t.name.split('&')[1].trim()[0] : ''}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-gray-500 text-sm">{t.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{t.text}</p>
                    <div className="flex items-center gap-2 text-amber-400">
                      {Array.from({ length: t.rating }).map((_,k) => <Star key={k} className="w-4 h-4" />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Contact ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Plan Your Dream Trip
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Fill the form and our travel experts respond within 2 hours with a tailored itinerary.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: Phone, label: 'Phone', lines: ['+91 98171 53799'] },
                { icon: Mail, label: 'Email', lines: ['info@himyatraholidays.com', 'bookings@himyatraholidays.com'] },
                { icon: Clock, label: 'Hours', lines: ['Mon – Sat: 9 AM – 7 PM', 'Sunday: 10 AM – 5 PM'] },
                { icon: MapPin, label: 'Address', lines: ['123, Travel Plaza, MG Road', 'Shimla, HP 171001'] },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={i}>
                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                        {item.lines.map((l, j) => <p key={j} className="text-gray-500 text-sm">{l}</p>)}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Book Your Tour</h3>

                {isSubmitted ? (
                  <div className="text-center py-14">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h4>
                    <p className="text-gray-500 mb-6 max-w-xs mx-auto">Our travel expert will contact you within 2 hours with a personalised plan.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-primary-600 font-semibold hover:underline text-sm">
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Rahul Sharma" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-sm transition-all" />
                        {formErrors.name && <p className="text-rose-600 text-sm mt-1">{formErrors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+91 98171 53799" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-sm transition-all" />
                        {formErrors.phone && <p className="text-rose-600 text-sm mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="you@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-sm transition-all" />
                      {formErrors.email && <p className="text-rose-600 text-sm mt-1">{formErrors.email}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Destination *</label>
                        <select name="destination" value={formData.destination} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-sm transition-all">
                          <option value="">Select destination</option>
                          {destinations.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                        </select>
                        {formErrors.destination && <p className="text-rose-600 text-sm mt-1">{formErrors.destination}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Travel Date *</label>
                        <input type="date" name="travelDate" value={formData.travelDate} onChange={handleInputChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-sm transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Number of Travelers *</label>
                      <select name="travelers" value={formData.travelers} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-sm transition-all">
                        {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>)}
                        <option value="10+">10+ People</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">Special Requirements</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Budget, dietary needs, mobility requirements..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-sm resize-none transition-all" />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5"
                      >
                        {isSubmitting ? (
                          <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Redirecting to WhatsApp...</>
                        ) : (
                          <><Send className="w-5 h-5" />Send Inquiry</>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-gray-400 text-center">
                      We reply within 2 hours. Your data is safe with us.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────────────────── */}
      {/* Modal / Lightbox for video playback */}
      {modalOpen && activeVideo && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
            <button
              onClick={() => { setModalOpen(false); setActiveVideo(null); }}
              className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full bg-black">
              <video
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-[60vh] object-contain bg-black"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold">Him Yatra</p>
                  <p className="text-gray-400 text-xs">Holidays</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting unforgettable Himalayan adventures since 2008. 10,000+ happy travellers and counting.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
              <ul className="space-y-2.5">
                {navItems.map(item => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item)} className="capitalize text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 block">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Top Packages</h4>
              <ul className="space-y-2.5">
                {destinations.slice(0, 7).map(d => (
                  <li key={d.id}>
                    <button onClick={() => handleEnquire(d.name)} className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 block">
                      {d.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  +91 98171 53799
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  info@himyatraholidays.com
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  123, Travel Plaza, MG Road, Shimla, HP 171001
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  Mon–Sat: 9 AM – 7 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">{new Date().getFullYear()} Him Yatra Holidays. All rights reserved.</p>
            <div className="flex gap-5">
              {['Privacy Policy', 'Terms of Service', 'Cancellation Policy'].map(l => (
                <a key={l} href="#" className="text-gray-500 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

