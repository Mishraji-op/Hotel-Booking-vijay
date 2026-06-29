import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Star, ArrowRight, ArrowLeft, ChevronDown,
  Mountain, Send, CheckCircle, Calendar, Camera,
  Clock, Sparkles, Compass, Sun, Snowflake, MessageCircle,
} from 'lucide-react';

// ─── Intersection Observer Hook ──────────────────────────────────────────────
function useIntersectionObserver(threshold = 0.12) {
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

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const lehPackages = [
  {
    id: 'leh-explorer',
    name: 'Leh Ladakh Explorer',
    duration: '6D / 5N',
    price: 25999,
    rating: 4.9,
    reviews: 312,
    tag: 'Best Seller',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Leh Local Sightseeing', 'Magnetic Hill', 'Shanti Stupa', 'Hall of Fame'],
    description: 'The perfect introductory trip to Ladakh — explore Leh city, ancient monasteries and dramatic landscapes.',
  },
  {
    id: 'leh-nubra',
    name: 'Leh Ladakh with Nubra',
    duration: '7D / 6N',
    price: 34999,
    rating: 5.0,
    reviews: 278,
    tag: 'Top Rated',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Nubra Valley', 'Hunder Sand Dunes', 'Diskit Monastery', 'Khardung La'],
    description: 'Extend your Ladakh adventure to the stunning Nubra Valley — double-humped camels, sand dunes and starlit skies.',
  },
  {
    id: 'pangong-adventure',
    name: 'Pangong Lake Adventure',
    duration: '5D / 4N',
    price: 27999,
    rating: 4.8,
    reviews: 198,
    tag: 'Adventure',
    image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Pangong Lake', 'Chang La Pass', 'Thiksey Monastery', 'Leh Palace'],
    description: 'A focused adventure to the iconic Pangong Tso — the colour-shifting lake that inspired millions.',
  },
];

const whyVisitItems = [
  { emoji: '🏔️', title: 'Stunning Mountains', desc: 'Towering peaks of the Karakoram & Himalayas surround you at every turn.' },
  { emoji: '🏍️', title: 'Famous Bike Trips', desc: 'Ride the legendary Manali-Leh Highway and Khardung La — bucket-list roads.' },
  { emoji: '🌊', title: 'Pangong Lake', desc: 'A 134 km high-altitude lake that shifts between cobalt, turquoise and emerald.' },
  { emoji: '🏜️', title: 'Nubra Valley', desc: 'White sand dunes, double-humped Bactrian camels and orchards at 10,000 ft.' },
  { emoji: '🛕', title: 'Ancient Monasteries', desc: 'Thiksey, Hemis, Diskit — centuries-old Buddhist gompas perched on cliff edges.' },
  { emoji: '📸', title: 'Photography Paradise', desc: 'Every frame is a masterpiece — dramatic light, vast landscapes, vivid culture.' },
];

const topAttractions = [
  { name: 'Pangong Lake', desc: 'A shimmering high-altitude lake stretching 134 km from India to Tibet.', image: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Nubra Valley', desc: 'The valley of flowers with sand dunes, hot springs and starry nights.', image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Khardung La', desc: 'One of the world\'s highest motorable passes at 17,982 ft.', image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Magnetic Hill', desc: 'The gravity-defying hill where vehicles appear to roll uphill.', image: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Thiksey Monastery', desc: 'A 12-storey hilltop gompa resembling the Potala Palace of Lhasa.', image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Hemis Monastery', desc: 'The largest and wealthiest monastery in Ladakh, home to the Hemis Festival.', image: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const itinerary = [
  { day: 1, title: 'Arrival at Leh', details: ['Airport/Bus Stand Pickup', 'Hotel Check-in', 'Acclimatization & Rest', 'Evening walk around Leh Market'] },
  { day: 2, title: 'Leh Local Sightseeing', details: ['Shanti Stupa', 'Leh Palace', 'Hall of Fame Museum', 'Magnetic Hill & Gurudwara Pathar Sahib'] },
  { day: 3, title: 'Leh → Nubra Valley', details: ['Drive via Khardung La (17,982 ft)', 'Diskit Monastery', 'Hunder Sand Dunes', 'Bactrian Camel Ride'] },
  { day: 4, title: 'Nubra → Pangong Lake', details: ['Drive via Shyok Road', 'Arrive at Pangong Tso', 'Lakeside Camping', 'Sunset at the Lake'] },
  { day: 5, title: 'Pangong → Leh', details: ['Sunrise at Pangong Lake', 'Drive back via Chang La', 'Thiksey Monastery Visit', 'Hemis Monastery Visit'] },
  { day: 6, title: 'Departure', details: ['Breakfast', 'Airport/Bus Stand Drop', 'Farewell with Memories'] },
];

const galleryImages = [
  { src: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pangong Lake' },
  { src: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Nubra Valley' },
  { src: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Khardung La Pass' },
  { src: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Monasteries' },
  { src: 'https://images.pexels.com/photos/2905570/pexels-photo-2905570.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bike Trips' },
  { src: 'https://images.pexels.com/photos/414746/pexels-photo-414746.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Camping' },
  { src: 'https://images.pexels.com/photos/2749656/pexels-photo-2749656.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Mountain Landscape' },
  { src: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Snow Mountains' },
  { src: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Valley View' },
];

const faqItems = [
  { q: 'What is the best time to visit Ladakh?', a: 'The best time to visit Ladakh is from May to September when the weather is pleasant, roads are open, and temperatures are comfortable for sightseeing and adventure activities. June to August is peak season with the warmest weather.' },
  { q: 'How much does a Ladakh trip cost?', a: 'A Ladakh trip typically costs between ₹20,000 to ₹50,000 per person depending on duration, accommodation type, and inclusions. Our packages start from ₹25,999 including hotels, meals, transfers, and permits.' },
  { q: 'How many days are enough for Ladakh?', a: 'We recommend at least 5–7 days for a complete Ladakh experience. This includes 1 day for acclimatization, 2 days for Nubra Valley, 1 day for Pangong Lake, and 1–2 days for Leh local sightseeing.' },
  { q: 'Is Ladakh safe for tourists?', a: 'Yes, Ladakh is very safe for tourists. The local people are extremely hospitable and friendly. However, altitude sickness is a concern — acclimatization on Day 1 is essential. We provide oxygen support and experienced guides on all our trips.' },
  { q: 'Do I need permits for Ladakh?', a: 'Yes, Inner Line Permits (ILP) are required for visiting Pangong Lake, Nubra Valley, and other restricted areas. Don\'t worry — all permits are included in our packages and we handle the entire process for you.' },
  { q: 'Can I visit Pangong Lake?', a: 'Absolutely! Pangong Lake is one of the must-visit destinations in Ladakh. Our Pangong Lake Adventure package is specifically designed for this. The lake is accessible from June to September via Chang La Pass.' },
  { q: 'Can I travel to Ladakh by bike?', a: 'Yes! The Manali-Leh and Srinagar-Leh highways are among the world\'s most famous bike routes. We also offer bike trip packages with Royal Enfield rentals, support vehicles, and experienced ride marshals.' },
  { q: 'What clothes should I carry for Ladakh?', a: 'Pack layered clothing — thermal inners, fleece jackets, windproof outer layer, warm socks, gloves, and a beanie. Even in summer, nights can drop to 0°C. Sunglasses and high-SPF sunscreen are also essential due to intense UV at altitude.' },
];

const inclusions = [
  { icon: '🏨', text: 'Hotel Accommodation' },
  { icon: '🍳', text: 'Breakfast' },
  { icon: '🍽️', text: 'Dinner' },
  { icon: '🗺️', text: 'Sightseeing' },
  { icon: '🚗', text: 'Transfers' },
  { icon: '📋', text: 'Permits' },
  { icon: '👨‍✈️', text: 'Driver Allowance' },
  { icon: '💰', text: 'All Taxes' },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function LehLadakhPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', travelDate: '', travelers: '2', budget: '', message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = 'hidden';
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightboxIdx(null);
        if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? (i + 1) % galleryImages.length : null);
        if (e.key === 'ArrowLeft') setLightboxIdx(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null);
      };
      document.addEventListener('keydown', handleKey);
      return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleKey); };
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxIdx]);

  const waLink = (text: string) => `https://wa.me/919817153799?text=${encodeURIComponent(text)}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `🏔️ Leh Ladakh Tour Enquiry\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📅 Travel Date: ${formData.travelDate}\n👥 Travelers: ${formData.travelers}\n💰 Budget: ${formData.budget || 'Not specified'}\n📝 Message: ${formData.message || 'N/A'}`;

    await new Promise(r => setTimeout(r, 300));
    window.open(waLink(message), '_blank');
    await new Promise(r => setTimeout(r, 500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', travelDate: '', travelers: '2', budget: '', message: '' });
  };

  const scrollToEnquiry = () => {
    document.getElementById('leh-enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const tagColors: Record<string, string> = {
    'Best Seller': 'bg-amber-500 text-white',
    'Top Rated': 'bg-emerald-500 text-white',
    'Adventure': 'bg-red-500 text-white',
  };

  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">

      {/* ─── Sticky Navigation ─────────────────────────────────────────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/weddings/Logo.png" alt="Him Yatra Logo" className="w-11 h-11 rounded-xl object-contain shadow-lg group-hover:scale-105 transition-transform" />
            <div className="text-left">
              <p className={`font-display text-lg font-bold leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Him Yatra</p>
              <p className={`text-xs font-medium leading-none mt-0.5 ${isScrolled ? 'text-primary-600' : 'text-white/70'}`}>Holiday</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/" className={`hidden md:flex items-center gap-1.5 text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'} transition-colors`}>
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <a href="tel:+919817153799" className={`hidden md:flex items-center gap-1.5 text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
              <Phone className="w-4 h-4" />
              +91 98171 53799 | +91 88945 33629
            </a>
            <button
              onClick={scrollToEnquiry}
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero Banner ───────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear hover:scale-105"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 18}%`, animationDelay: `${i * 0.8}s`, animationDuration: `${5 + i}s` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-sm font-medium">Adventure • Mountains • Bike Trips</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight hero-title-line">
            Leh Ladakh Tour Packages
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-3">
            Starting from <span className="text-accent-400 font-bold text-3xl">₹25,999</span>
          </p>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-10">
            Explore the breathtaking landscapes of Ladakh with customized tour packages designed for travelers across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToEnquiry}
              className="group bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={waLink('Hello, I am interested in Leh Ladakh tour packages. Please share details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/15 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 25C384 30 480 50 576 55C672 60 768 50 864 40C960 30 1056 20 1152 25C1248 30 1344 50 1392 60L1440 70V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ─── Available Packages ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-4">
                <Compass className="w-4 h-4 text-primary-600" />
                <span className="text-primary-700 text-sm font-semibold">3 Packages Available</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Available Leh Ladakh Packages
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Choose the perfect Ladakh adventure — from quick getaways to comprehensive explorations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lehPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 120}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col border border-gray-100">
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full ${tagColors[pkg.tag] ?? 'bg-gray-500 text-white'}`}>
                      {pkg.tag}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-display text-2xl font-bold leading-tight">{pkg.name}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500 font-medium">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-gray-800 text-sm">{pkg.rating}</span>
                        <span className="text-gray-400 text-xs">({pkg.reviews})</span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{pkg.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {pkg.highlights.map((h, j) => (
                        <span key={j} className="text-xs bg-primary-50 text-primary-700 border border-primary-100 px-2.5 py-1 rounded-full font-medium">
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Starting from</p>
                        <p className="text-2xl font-bold text-gray-900">₹{pkg.price.toLocaleString('en-IN')}</p>
                        <p className="text-xs text-gray-400">per person</p>
                      </div>
                      <button
                        onClick={scrollToEnquiry}
                        className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center gap-2 group/btn shadow-sm hover:shadow-primary-500/30 hover:shadow-lg"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Destination Description (SEO) ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Leh Ladakh Tour Packages 2026 | Adventure Trips & Scenic Road Journeys
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5">
              <p>
                Explore the breathtaking landscapes of Ladakh with our customized tour packages designed for travelers across India. Leh Ladakh, located in the northernmost part of India, is a land of dramatic contrasts — towering snow-capped peaks, shimmering turquoise lakes, ancient Buddhist monasteries, and vast barren landscapes that seem to belong to another planet.
              </p>
              <p>
                Our Leh Ladakh tour packages are carefully crafted to give you the most authentic experience of this magical region. Whether you're a solo traveler seeking adventure on two wheels, a couple looking for a romantic getaway beneath the stars, or a family wanting to create lasting memories — we have the perfect itinerary for you.
              </p>
              <p>
                From the legendary Khardung La Pass to the colour-shifting waters of Pangong Lake, from the sand dunes of Nubra Valley to the ancient halls of Hemis Monastery — every day in Ladakh brings a new adventure. Our experienced local guides ensure your safety and comfort at high altitudes while revealing the hidden gems that make Ladakh truly special.
              </p>
              <p>
                All our packages include comfortable accommodation, daily meals, airport transfers, inner line permits, and a dedicated support team on call 24/7. We also offer customized bike trip packages with Royal Enfield rentals and experienced ride marshals for the adventure enthusiasts.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Why Visit Ladakh ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-accent-400 font-semibold tracking-widest uppercase text-sm mb-3">Why Ladakh</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Visit Ladakh?</h2>
              <p className="text-primary-300 max-w-xl mx-auto">Six unforgettable reasons to make Ladakh your next destination.</p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyVisitItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-7 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Ladakh ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl blur-2xl opacity-50" />
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pangong Lake, Ladakh"
                    className="rounded-2xl shadow-2xl w-full object-cover h-[480px]"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                        <Mountain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">17,982 ft</p>
                        <p className="text-gray-400 text-sm">Khardung La Pass</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">About the Destination</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Ladakh</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Leh Ladakh is one of India's most spectacular travel destinations, nestled in the northernmost region of the country between the Karakoram and the Great Himalayan ranges. Known as the "Land of High Passes," Ladakh offers an otherworldly landscape of barren mountains, turquoise lakes, and ancient Buddhist culture that has remained largely untouched for centuries.
                </p>
                <p>
                  The region's stark beauty and extreme terrain make it a magnet for adventure enthusiasts — from motorcycle riders conquering the world's highest passes to trekkers exploring remote valleys. But Ladakh is equally rewarding for those seeking peace, spirituality, and cultural immersion at century-old monasteries.
                </p>
                <p>
                  With improved infrastructure, comfortable hotels, and well-maintained roads, Ladakh has become accessible to all types of travelers. Whether you fly into Kushok Bakula Rimpochee Airport or take the legendary road journey from Manali or Srinagar, the experience of arriving in Ladakh is nothing short of life-changing.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Top Attractions ───────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-100 rounded-full px-4 py-1.5 mb-4">
                <Camera className="w-4 h-4 text-accent-600" />
                <span className="text-accent-700 text-sm font-semibold">Must Visit</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top Attractions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">The iconic landmarks that make every Ladakh trip unforgettable.</p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topAttractions.map((attr, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="relative overflow-hidden h-48">
                    <img src={attr.image} alt={attr.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 text-white font-display text-xl font-bold">{attr.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{attr.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Best Time to Visit ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Best Time to Visit</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Plan your trip around Ladakh's seasonal patterns for the best experience.</p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="relative bg-gradient-to-br from-emerald-50 to-sky-50 border-2 border-emerald-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">RECOMMENDED</div>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">May – September</h3>
                <p className="text-emerald-600 font-semibold text-lg mb-3">Ideal Weather</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  All roads open, pleasant temperatures (15°C–30°C), clear skies, perfect for sightseeing, trekking, and bike trips. Peak tourist season with the best conditions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">October – April</h3>
                <p className="text-blue-600 font-semibold text-lg mb-3">Snow & Extreme Cold</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Temperatures drop to -30°C. Most roads closed. Only accessible by air. Ideal for Chadar Trek (frozen river trek) enthusiasts and snow lovers.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Package Inclusions ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Package Inclusions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Everything covered in our all-inclusive Ladakh tour packages.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <span className="text-lg">{item.icon}</span>
                      <p className="text-gray-700 font-medium text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Tour Itinerary ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-4">
                <Calendar className="w-4 h-4 text-primary-600" />
                <span className="text-primary-700 text-sm font-semibold">Sample Itinerary</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tour Itinerary</h2>
              <p className="text-gray-500 max-w-xl mx-auto">A day-by-day breakdown of your unforgettable Ladakh adventure.</p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-accent-500" />

            <div className="space-y-8">
              {itinerary.map((day, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Day circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30">
                        <span className="text-white font-bold text-sm md:text-base">Day {day.day}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex-1 hover:shadow-lg transition-all duration-300 hover:border-primary-200">
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{day.title}</h3>
                      <ul className="space-y-2">
                        {day.details.map((detail, j) => (
                          <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Breathtaking moments captured across our Ladakh journeys.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div
                  className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                  onClick={() => setLightboxIdx(i)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                        <Camera className="w-4 h-4 text-gray-800" />
                        <span className="text-gray-800 font-semibold text-sm">{img.alt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lightbox ──────────────────────────────────────────────────────── */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-sm transition-colors z-10"
          >
            <span className="text-2xl font-light">✕</span>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + galleryImages.length) % galleryImages.length); }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm transition-colors z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % galleryImages.length); }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm transition-colors z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <img
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white/80 font-medium text-lg">{galleryImages[lightboxIdx].alt}</p>
        </div>
      )}

      {/* ─── FAQ Section ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Everything you need to know before your Ladakh trip.</p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-primary-600 rotate-180' : 'bg-gray-100'}`}>
                      <ChevronDown className={`w-4 h-4 ${openFaq === i ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Enquiry Section ───────────────────────────────────────────────── */}
      <section id="leh-enquiry" className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-accent-400 font-semibold tracking-widest uppercase text-sm mb-3">Plan Your Trip</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h2>
              <p className="text-primary-300 max-w-xl mx-auto">Fill in the details below and we'll send you a customized Ladakh tour plan within 2 hours.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-14">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Thank You!</h4>
                  <p className="text-primary-300 mb-6 max-w-xs mx-auto">Your enquiry has been sent to WhatsApp. Our travel expert will contact you within 2 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-accent-400 font-semibold hover:underline text-sm">
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white placeholder-white/40 text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+91 98171 53799"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white placeholder-white/40 text-sm transition-all" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Travel Date *</label>
                      <input type="date" name="travelDate" value={formData.travelDate} onChange={handleInputChange} required min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white text-sm transition-all [color-scheme:dark]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Number of Travelers *</label>
                      <select name="travelers" value={formData.travelers} onChange={handleInputChange} required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white text-sm transition-all">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n} className="text-gray-900">{n} {n === 1 ? 'Person' : 'People'}</option>)}
                        <option value="10+" className="text-gray-900">10+ People</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Budget (Optional)</label>
                    <select name="budget" value={formData.budget} onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white text-sm transition-all">
                      <option value="" className="text-gray-900">Select your budget</option>
                      <option value="Under ₹25,000" className="text-gray-900">Under ₹25,000</option>
                      <option value="₹25,000 - ₹35,000" className="text-gray-900">₹25,000 – ₹35,000</option>
                      <option value="₹35,000 - ₹50,000" className="text-gray-900">₹35,000 – ₹50,000</option>
                      <option value="₹50,000+" className="text-gray-900">₹50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Special Requirements</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Any special requests, dietary needs, bike trip interest..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white placeholder-white/40 text-sm resize-none transition-all" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending to WhatsApp...</>
                      ) : (
                        <><Send className="w-5 h-5" />Get Free Quote</>
                      )}
                    </button>
                    <a
                      href={waLink('Hello, I am interested in Leh Ladakh tour packages.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </a>
                  </div>

                  <p className="text-xs text-white/40 text-center">We reply within 2 hours. Your data is safe with us.</p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5 group">
                <img src="/images/weddings/Logo.png" alt="Him Yatra Logo" className="w-11 h-11 rounded-xl object-contain" />
                <div>
                  <p className="font-display text-xl font-bold">Him Yatra</p>
                  <p className="text-gray-400 text-xs">Holiday</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting unforgettable Himalayan adventures since 2008. 10,000+ happy travellers and counting.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors block">Home</Link></li>
                <li><a href="#packages" className="text-gray-400 hover:text-white text-sm transition-colors block">Leh Packages</a></li>
                <li><a href="#leh-enquiry" className="text-gray-400 hover:text-white text-sm transition-colors block">Get Quote</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Leh Ladakh Packages</h4>
              <ul className="space-y-2.5">
                {lehPackages.map(pkg => (
                  <li key={pkg.id}>
                    <button onClick={scrollToEnquiry} className="text-gray-400 hover:text-white text-sm transition-colors block">
                      {pkg.name}
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
                  +91 98171 53799 / +91 88945 33629
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  123, Travel Plaza, MG Road, Shimla
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  Mon–Sat: 9 AM – 7 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">{new Date().getFullYear()} Him Yatra Holiday. All rights reserved.</p>
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
