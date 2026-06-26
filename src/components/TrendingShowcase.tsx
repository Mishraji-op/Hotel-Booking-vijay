import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Destination {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  category: string;
  image: string;
}

// ─── Format price ────────────────────────────────────────────────────────────
function formatPrice(n: number): string {
  return '₹' + n.toLocaleString('en-IN');
}

// ─── Category filter pill ────────────────────────────────────────────────────
function CategoryPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="sc-pill"
      data-active={active || undefined}
    >
      {label}
      <span className="sc-pill__count">{count}</span>
    </button>
  );
}

// ─── Showcase Card ───────────────────────────────────────────────────────────

function ShowcaseCard({
  dest,
  index,
}: {
  dest: Destination;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="sc-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? 'translateY(-10px)' : 'translateY(0)'
          : 'translateY(40px)',
        transitionDelay: visible ? '0ms' : `${(index % 6) * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <div className="sc-card__img-wrap">
        <img
          src={dest.image.replace('w=800', 'w=1200')}
          alt={dest.name}
          loading="lazy"
          className="sc-card__img"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="sc-card__overlay"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.30) 45%, rgba(0,0,0,0.10) 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.04) 100%)',
        }}
      />

      {/* Top-left content */}
      <div className="sc-card__top">
        <span className="sc-card__tagline">{dest.subtitle}</span>
        <h3 className="sc-card__title">{dest.name}</h3>
      </div>

      {/* Bottom content */}
      <div className="sc-card__bottom">
        <div className="sc-card__price-block">
          <span className="sc-card__price-label">Starting From</span>
          <span className="sc-card__price">{formatPrice(dest.price)}</span>
        </div>

        <button
          className="sc-card__btn"
          aria-label={`Explore ${dest.name}`}
        >
          <ArrowRight
            className="sc-card__arrow"
            style={{ transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)' }}
          />
        </button>
      </div>
    </div>
  );
}

// ─── Main Showcase Component ─────────────────────────────────────────────────

export default function TrendingShowcase({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Category counts
  const allCount = destinations.length;
  const domesticCount = destinations.filter(d => d.category === 'Domestic').length;
  const pilgrimageCount = destinations.filter(d => d.category === 'Pilgrimage').length;
  const internationalCount = destinations.filter(d => d.category === 'International').length;

  const filtered = activeFilter === 'All'
    ? destinations
    : destinations.filter(d => d.category === activeFilter);

  return (
    <section id="packages" className="sc-section">
      {/* Decorative blurs */}
      <div className="sc-section__blur sc-section__blur--1" />
      <div className="sc-section__blur sc-section__blur--2" />

      {/* Section heading */}
      <div
        ref={headerRef}
        className="sc-header"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(28px)',
        }}
      >
        <div className="sc-header__badge">
          <span className="sc-header__badge-dot" />
          Trending Destinations
        </div>
        <h2 className="sc-header__title">
          Explore Trending{' '}
          <span className="sc-header__accent">Destinations</span>
        </h2>
        <p className="sc-header__subtitle">
          Handpicked travel experiences across India &amp; the world — crafted for unforgettable journeys.
        </p>

        {/* Category filters */}
        <div className="sc-filters">
          <CategoryPill label="All" count={allCount} active={activeFilter === 'All'} onClick={() => setActiveFilter('All')} />
          <CategoryPill label="Domestic" count={domesticCount} active={activeFilter === 'Domestic'} onClick={() => setActiveFilter('Domestic')} />
          <CategoryPill label="Pilgrimage" count={pilgrimageCount} active={activeFilter === 'Pilgrimage'} onClick={() => setActiveFilter('Pilgrimage')} />
          <CategoryPill label="International" count={internationalCount} active={activeFilter === 'International'} onClick={() => setActiveFilter('International')} />
        </div>
      </div>

      {/* Card grid */}
      <div className="sc-grid" key={activeFilter}>
        {filtered.map((dest, i) => (
          <ShowcaseCard key={dest.id} dest={dest} index={i} />
        ))}
      </div>
    </section>
  );
}
