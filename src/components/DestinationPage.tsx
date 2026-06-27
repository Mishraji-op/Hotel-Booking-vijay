import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin, Phone, Mail, ArrowRight, ArrowLeft, ChevronDown,
  Mountain, Send, CheckCircle, Calendar, Camera,
  Clock, Sparkles, Compass, Sun, Snowflake, CloudRain, Leaf,
  MessageCircle, PhoneCall,
} from 'lucide-react';
import { getDestinationBySlug } from '../data/destinationData';

// ─── Intersection Observer ───────────────────────────────────────────────────

function useInView(threshold = 0.12) {
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

function Anim({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
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

// ─── Season Icon Helper ──────────────────────────────────────────────────────

function SeasonIcon({ type }: { type: string }) {
  switch (type) {
    case 'snow': return <Snowflake className="w-8 h-8 text-white" />;
    case 'rain': return <CloudRain className="w-8 h-8 text-white" />;
    case 'leaf': return <Leaf className="w-8 h-8 text-white" />;
    default: return <Sun className="w-8 h-8 text-white" />;
  }
}

function seasonGradient(type: string) {
  switch (type) {
    case 'snow': return 'from-blue-400 to-indigo-600';
    case 'rain': return 'from-teal-400 to-cyan-600';
    case 'leaf': return 'from-amber-400 to-orange-600';
    default: return 'from-emerald-400 to-emerald-600';
  }
}

function seasonBg(type: string) {
  switch (type) {
    case 'snow': return 'from-blue-50 to-indigo-50 border-blue-200';
    case 'rain': return 'from-teal-50 to-cyan-50 border-teal-200';
    case 'leaf': return 'from-amber-50 to-orange-50 border-amber-200';
    default: return 'from-emerald-50 to-sky-50 border-emerald-200';
  }
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const dest = getDestinationBySlug(slug || '');

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', travelDate: '', destination: dest?.name || '', travelers: '2', budget: '',
  });

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // Update form destination when dest changes
  useEffect(() => {
    if (dest) setFormData(prev => ({ ...prev, destination: dest.name }));
  }, [dest]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = 'hidden';
      const handleKey = (e: KeyboardEvent) => {
        if (!dest) return;
        const total = dest.placesToVisit.length;
        if (e.key === 'Escape') setLightboxIdx(null);
        if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? (i + 1) % total : null);
        if (e.key === 'ArrowLeft') setLightboxIdx(i => i !== null ? (i - 1 + total) % total : null);
      };
      document.addEventListener('keydown', handleKey);
      return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleKey); };
    } else { document.body.style.overflow = ''; }
  }, [lightboxIdx, dest]);

  if (!dest) {
    return (
      <div className="min-h-screen bg-white font-body flex items-center justify-center">
        <div className="text-center px-6">
          <Mountain className="w-16 h-16 text-gray-300 mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-3">Destination Not Found</h1>
          <p className="text-gray-500 mb-8">The destination you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const waLink = (text: string) => `https://wa.me/919817153799?text=${encodeURIComponent(text)}`;
  const scrollToEnquiry = () => document.getElementById('dest-enquiry')?.scrollIntoView({ behavior: 'smooth' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = `🌍 ${dest.name} Tour Enquiry\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email}\n📅 Travel Date: ${formData.travelDate}\n📍 Destination: ${formData.destination}\n👥 Travelers: ${formData.travelers}\n💰 Budget: ${formData.budget || 'Not specified'}`;
    await new Promise(r => setTimeout(r, 300));
    window.open(waLink(message), '_blank');
    await new Promise(r => setTimeout(r, 500));
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', email: '', travelDate: '', destination: dest.name, travelers: '2', budget: '' });
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribing(true);
    await new Promise(r => setTimeout(r, 800));
    setSubscribed(true);
    setSubscribing(false);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">

      {/* ═══ 1. STICKY NAV ═══════════════════════════════════════════════════ */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/weddings/Logo.png" alt="Him Yatra Logo" className="w-11 h-11 rounded-xl object-contain shadow-lg group-hover:scale-105 transition-transform" />
            <div className="text-left">
              <p className={`font-display text-lg font-bold leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Him Yatra</p>
              <p className={`text-xs font-medium leading-none mt-0.5 ${isScrolled ? 'text-primary-600' : 'text-white/70'}`}>Holidays</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className={`hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/80 hover:text-white'}`}>
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <a href="tel:+919817153799" className={`hidden md:flex items-center gap-1.5 text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
              <Phone className="w-4 h-4" /> +91 98171 53799
            </a>
            <button onClick={scrollToEnquiry} className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 hover:-translate-y-0.5">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ 1. HERO SECTION ═════════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${dest.heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{ left: `${12 + i * 14}%`, top: `${18 + (i % 3) * 22}%`, animationDelay: `${i * 0.9}s`, animationDuration: `${5 + i}s` }} />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-sm font-medium">Starting from ₹{Math.min(...dest.packages.map(p => p.price)).toLocaleString('en-IN')}</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight hero-title-line">
            {dest.heroTitle}
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            {dest.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToEnquiry}
              className="group bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
              <Send className="w-5 h-5" /> Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href={waLink(`Hello, I am interested in ${dest.name} tour packages.`)} target="_blank" rel="noopener noreferrer"
              className="group border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/15 transition-all duration-300 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> WhatsApp Now
            </a>
            <a href="tel:+919817153799"
              className="group border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/15 transition-all duration-300 flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 55C840 60 960 50 1080 40C1200 30 1320 20 1380 15L1440 10V80H0V40Z" fill="white" /></svg>
        </div>
      </section>

      {/* ═══ 2. AVAILABLE PACKAGES ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-4">
                <Compass className="w-4 h-4 text-primary-600" />
                <span className="text-primary-700 text-sm font-semibold">{dest.packages.length} Packages Available</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Available {dest.name} Packages
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">Choose the perfect {dest.name} adventure for your dream getaway.</p>
            </div>
          </Anim>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dest.packages.map((pkg, i) => (
              <Anim key={i} delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                  <div className="relative overflow-hidden h-48">
                    <img src={dest.heroImage.replace('w=1920', 'w=800')} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-display text-lg font-bold leading-tight">{pkg.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 mb-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500 font-medium">{pkg.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.highlights.map((h, j) => (
                        <span key={j} className="text-xs bg-primary-50 text-primary-700 border border-primary-100 px-2 py-0.5 rounded-full font-medium">{h}</span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-end justify-between pt-3 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">From</p>
                        <p className="text-xl font-bold text-gray-900">₹{pkg.price.toLocaleString('en-IN')}</p>
                      </div>
                      <button onClick={scrollToEnquiry}
                        className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2.5 rounded-xl font-semibold text-xs hover:from-primary-700 hover:to-primary-800 transition-all flex items-center gap-1.5 shadow-sm">
                        Get Quote <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. FEATURED IMAGE ══════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img src={dest.featuredImage.src} alt={dest.featuredImage.caption} className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2.5">
                  <Camera className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold">{dest.featuredImage.caption}</span>
                </div>
              </div>
            </div>
          </Anim>
        </div>
      </section>

      {/* ═══ 4. ABOUT DESTINATION ════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Anim>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl blur-2xl opacity-50" />
                <img src={dest.featuredImage.src} alt={dest.name} className="relative rounded-2xl shadow-2xl w-full object-cover h-[450px]" />
              </div>
            </Anim>
            <Anim delay={200}>
              <p className="text-primary-600 font-semibold tracking-widest uppercase text-sm mb-3">About the Destination</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">{dest.aboutHeading}</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                {dest.aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Anim>
          </div>
        </div>
      </section>

      {/* ═══ 5. WHY VISIT ════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="text-center mb-14">
              <p className="text-accent-400 font-semibold tracking-widest uppercase text-sm mb-3">Why {dest.name}</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Why Visit {dest.name}?</h2>
            </div>
          </Anim>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dest.whyVisit.map((item, i) => (
              <Anim key={i} delay={i * 80}>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-7 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <p className="text-white font-semibold text-lg">{item.text}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. PLACES TO VISIT ══════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-accent-50 border border-accent-100 rounded-full px-4 py-1.5 mb-4">
                <MapPin className="w-4 h-4 text-accent-600" />
                <span className="text-accent-700 text-sm font-semibold">Must Visit Places</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Places To Visit</h2>
            </div>
          </Anim>

          <div className="space-y-12">
            {dest.placesToVisit.map((place, i) => (
              <Anim key={i} delay={i * 80}>
                <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer" onClick={() => setLightboxIdx(i)}>
                      <img src={place.image} alt={place.name} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                  <div className={`${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">{place.name}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{place.description}</p>
                    <button onClick={scrollToEnquiry} className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group/btn">
                      Plan a visit <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LIGHTBOX ════════════════════════════════════════════════════════ */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }} className="absolute top-6 right-6 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-sm z-10">
            <span className="text-2xl font-light">✕</span>
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + dest.placesToVisit.length) % dest.placesToVisit.length); }} className="absolute left-4 md:left-8 text-white/80 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm z-10"><ArrowLeft className="w-6 h-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % dest.placesToVisit.length); }} className="absolute right-4 md:right-8 text-white/80 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-sm z-10"><ArrowRight className="w-6 h-6" /></button>
          <img src={dest.placesToVisit[lightboxIdx].image.replace('w=600', 'w=1200')} alt={dest.placesToVisit[lightboxIdx].name} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain" onClick={e => e.stopPropagation()} />
          <p className="absolute bottom-8 text-white/80 font-medium text-lg">{dest.placesToVisit[lightboxIdx].name}</p>
        </div>
      )}

      {/* ═══ 7. ABOUT PACKAGES ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">{dest.aboutPackagesHeading}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-5">
              {dest.aboutPackagesParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Anim>
        </div>
      </section>

      {/* ═══ 8. BEST TIME TO VISIT ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Best Time to Visit</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Plan around {dest.name}'s seasonal patterns for the best experience.</p>
            </div>
          </Anim>
          <div className="grid sm:grid-cols-3 gap-6">
            {dest.bestTime.map((s, i) => (
              <Anim key={i} delay={i * 120}>
                <div className={`relative bg-gradient-to-br ${seasonBg(s.type)} border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 overflow-hidden h-full`}>
                  {s.recommended && <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">RECOMMENDED</div>}
                  <div className={`w-16 h-16 bg-gradient-to-br ${seasonGradient(s.type)} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <SeasonIcon type={s.type} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{s.period}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. PACKAGE INCLUSIONS ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Package Inclusions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Everything covered in our all-inclusive {dest.name} tour packages.</p>
            </div>
          </Anim>
          <Anim>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {dest.inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group">
                    <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-gray-700 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Anim>
        </div>
      </section>

      {/* ═══ 10. FAQ SECTION ═════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Everything you need to know about {dest.name} tours.</p>
            </div>
          </Anim>
          <div className="space-y-3">
            {dest.faq.map((faq, i) => (
              <Anim key={i} delay={i * 40}>
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary-300 transition-colors bg-white">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-primary-600 rotate-180' : 'bg-gray-100'}`}>
                      <ChevronDown className={`w-4 h-4 ${openFaq === i ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                  </div>
                </div>
              </Anim>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11. ENQUIRY FORM ════════════════════════════════════════════════ */}
      <section id="dest-enquiry" className="py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="text-center mb-12">
              <p className="text-accent-400 font-semibold tracking-widest uppercase text-sm mb-3">Plan Your Trip</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Get Your Free {dest.name} Quote</h2>
              <p className="text-primary-300 max-w-xl mx-auto">Fill the details below and we'll send you a customized plan within 2 hours.</p>
            </div>
          </Anim>
          <Anim>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-14">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Thank You!</h4>
                  <p className="text-primary-300 mb-6">Your enquiry has been sent via WhatsApp. We'll contact you within 2 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-accent-400 font-semibold hover:underline text-sm">Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white placeholder-white/40 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+91 98171 53799"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white placeholder-white/40 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="you@email.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white placeholder-white/40 text-sm" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Travel Date *</label>
                      <input type="date" name="travelDate" value={formData.travelDate} onChange={handleInputChange} required min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none text-white text-sm [color-scheme:dark]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Destination</label>
                      <input type="text" name="destination" value={formData.destination} readOnly
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/60 text-sm cursor-not-allowed" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Travelers *</label>
                      <select name="travelers" value={formData.travelers} onChange={handleInputChange} required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 outline-none text-white text-sm">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n} className="text-gray-900">{n} {n === 1 ? 'Person' : 'People'}</option>)}
                        <option value="10+" className="text-gray-900">10+ People</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/70 uppercase tracking-wide mb-2">Budget</label>
                      <select name="budget" value={formData.budget} onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-accent-500 outline-none text-white text-sm">
                        <option value="" className="text-gray-900">Select budget</option>
                        <option value="Under ₹25,000" className="text-gray-900">Under ₹25,000</option>
                        <option value="₹25,000 - ₹50,000" className="text-gray-900">₹25,000 – ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000" className="text-gray-900">₹50,000 – ₹1,00,000</option>
                        <option value="₹1,00,000+" className="text-gray-900">₹1,00,000+</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-accent-500/30 transition-all disabled:opacity-60 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                    {isSubmitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>) : (<><Send className="w-5 h-5" />Get Free Quote</>)}
                  </button>
                  <p className="text-xs text-white/40 text-center">Submit directly to WhatsApp. We reply within 2 hours.</p>
                </form>
              )}
            </div>
          </Anim>
        </div>
      </section>

      {/* ═══ 12. NEWSLETTER ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Anim>
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 border border-primary-100 rounded-2xl p-8 md:p-12 text-center shadow-sm">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Get special offers, and more from Him Yatra Holidays
              </h2>
              <p className="text-gray-500 mb-8">Subscribe to see secret deals and price drops.</p>

              {subscribed ? (
                <div className="flex items-center justify-center gap-3 text-emerald-600">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold text-lg">You're subscribed! Check your inbox for deals.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email" required placeholder="Enter your email address" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-5 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm shadow-sm" />
                  <button type="submit" disabled={subscribing}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-primary-500/30 transition-all disabled:opacity-60 flex-shrink-0 flex items-center justify-center gap-2">
                    {subscribing ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </Anim>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════════════════════════════ */}
      <footer className="bg-gray-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5 group">
                <img src="/images/weddings/Logo.png" alt="Him Yatra Logo" className="w-11 h-11 rounded-xl object-contain" />
                <div><p className="font-display text-xl font-bold">Him Yatra</p><p className="text-gray-400 text-xs">Holidays</p></div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">Crafting unforgettable adventures since 2008. 10,000+ happy travellers.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors block">Home</Link></li>
                <li><a href="#packages" className="text-gray-400 hover:text-white text-sm transition-colors block">{dest.name} Packages</a></li>
                <li><a href="#dest-enquiry" className="text-gray-400 hover:text-white text-sm transition-colors block">Get Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 text-sm"><Phone className="w-4 h-4 text-primary-400" /> +91 98171 53799</li>
                <li className="flex items-center gap-3 text-gray-400 text-sm"><Mail className="w-4 h-4 text-primary-400" /> info@himyatraholidays.com</li>
                <li className="flex items-center gap-3 text-gray-400 text-sm"><MapPin className="w-4 h-4 text-primary-400" /> Shimla, HP</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-300">Hours</h4>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-3 text-gray-400 text-sm"><Calendar className="w-4 h-4 text-primary-400" /> Mon–Sat: 9 AM – 7 PM</li>
                <li className="flex items-center gap-3 text-gray-400 text-sm"><Clock className="w-4 h-4 text-primary-400" /> Sun: 10 AM – 5 PM</li>
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

      {/* ═══ FLOATING WHATSAPP BUTTON ════════════════════════════════════════ */}
      <a
        href={waLink(`Hi! I'm interested in ${dest.name} tour packages. Please share details.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
