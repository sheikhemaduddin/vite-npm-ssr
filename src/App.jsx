import { useState } from 'react';

const INVENTORY = [
  {
    id: 1,
    year: 2025,
    make: 'BMW',
    model: 'X5 xDrive40i',
    trim: 'M Sport Package',
    price: 67900,
    mileage: 4200,
    type: 'suv',
    badge: 'New',
    badgeClass: '',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  },
  {
    id: 2,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'E 350',
    trim: 'AMG Line',
    price: 54800,
    mileage: 11200,
    type: 'sedan',
    badge: 'Certified',
    badgeClass: 'certified',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
  },
  {
    id: 3,
    year: 2025,
    make: 'Tesla',
    model: 'Model Y',
    trim: 'Long Range AWD',
    price: 48990,
    mileage: 890,
    type: 'electric',
    badge: 'Electric',
    badgeClass: 'electric',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
  },
  {
    id: 4,
    year: 2023,
    make: 'Audi',
    model: 'Q7 Premium Plus',
    trim: 'Quattro',
    price: 52100,
    mileage: 18400,
    type: 'suv',
    badge: 'Certified',
    badgeClass: 'certified',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
  },
  {
    id: 5,
    year: 2024,
    make: 'Lexus',
    model: 'ES 350 F Sport',
    trim: 'Navigation Package',
    price: 44200,
    mileage: 9600,
    type: 'sedan',
    badge: 'Certified',
    badgeClass: 'certified',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
  },
  {
    id: 6,
    year: 2025,
    make: 'Porsche',
    model: 'Cayenne',
    trim: 'Base',
    price: 78900,
    mileage: 1200,
    type: 'suv',
    badge: 'New',
    badgeClass: '',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  },
];

const FILTERS = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'suv', label: 'SUVs' },
  { id: 'sedan', label: 'Sedans' },
  { id: 'electric', label: 'Electric' },
];

const TESTIMONIALS = [
  {
    name: 'Michael Torres',
    location: 'San Mateo, CA',
    initials: 'MT',
    text: 'Bought my BMW here last month. The team was transparent about pricing and had the car detailed and ready when I arrived. Best dealership experience I\'ve had.',
  },
  {
    name: 'Sarah Chen',
    location: 'Palo Alto, CA',
    initials: 'SC',
    text: 'Traded in my old sedan and drove home in a certified pre-owned Mercedes the same day. Financing was straightforward and the rates were competitive.',
  },
  {
    name: 'James Whitfield',
    location: 'Redwood City, CA',
    initials: 'JW',
    text: 'Their service department is top-notch. I\'ve been bringing my cars here for three years — always honest diagnostics and fair pricing.',
  },
];

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function formatMileage(n) {
  return new Intl.NumberFormat('en-US').format(n) + ' mi';
}

export default function App() {
  const [filter, setFilter] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState({ make: '', type: '', budget: '' });

  const filtered = filter === 'all' ? INVENTORY : INVENTORY.filter((c) => c.type === filter);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <>
      <header className="site-header">
        <div className="header-top">
          <div className="container">
            <span>Open Mon–Sat 9am–7pm · Sun 10am–5pm</span>
            <span>
              <a href="tel:6505550199">(650) 555-0199</a>
              {' · '}
              <a href="#contact">1200 Auto Row, San Carlos, CA</a>
            </span>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <a href="#" className="logo">
              <div className="logo-mark">PM</div>
              <div className="logo-text">
                <strong>Premier Motors</strong>
                <span>Est. 1987 · Family Owned</span>
              </div>
            </a>
            <nav className="main-nav" aria-label="Main navigation">
              <a href="#inventory">Inventory</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="header-actions">
              <a href="#contact" className="btn btn-outline btn-sm">Schedule Test Drive</a>
              <a href="#inventory" className="btn btn-primary btn-sm">Browse Inventory</a>
              <button
                className="menu-toggle"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                {menuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
          <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
            <a href="#inventory" onClick={() => setMenuOpen(false)}>Inventory</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container">
          <div className="hero-content">
            <h1>Drive home your <em>dream car</em> today</h1>
            <p>
              Over 200 new and certified pre-owned vehicles in stock. Competitive financing,
              honest trade-in values, and a service team you can trust.
            </p>
            <div className="hero-actions">
              <a href="#inventory" className="btn btn-primary">View Inventory</a>
              <a href="#contact" className="btn btn-outline" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Get Pre-Approved
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>4.9★</strong>
                <span>Google Rating</span>
              </div>
              <div className="hero-stat">
                <strong>200+</strong>
                <span>Vehicles in Stock</span>
              </div>
              <div className="hero-stat">
                <strong>37 yrs</strong>
                <span>In Business</span>
              </div>
            </div>
          </div>

          <div className="search-card">
            <h2>Find Your Vehicle</h2>
            <form onSubmit={(e) => { e.preventDefault(); setFilter(search.type || 'all'); document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <div className="form-group">
                <label htmlFor="make">Make</label>
                <select
                  id="make"
                  className="form-input"
                  value={search.make}
                  onChange={(e) => setSearch((s) => ({ ...s, make: e.target.value }))}
                >
                  <option value="">Any Make</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="audi">Audi</option>
                  <option value="lexus">Lexus</option>
                  <option value="tesla">Tesla</option>
                  <option value="porsche">Porsche</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="type">Body Style</label>
                  <select
                    id="type"
                    className="form-input"
                    value={search.type}
                    onChange={(e) => setSearch((s) => ({ ...s, type: e.target.value }))}
                  >
                    <option value="">Any Type</option>
                    <option value="suv">SUV</option>
                    <option value="sedan">Sedan</option>
                    <option value="electric">Electric</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Max Budget</label>
                  <select
                    id="budget"
                    className="form-input"
                    value={search.budget}
                    onChange={(e) => setSearch((s) => ({ ...s, budget: e.target.value }))}
                  >
                    <option value="">No Max</option>
                    <option value="40000">Under $40,000</option>
                    <option value="60000">Under $60,000</option>
                    <option value="80000">Under $80,000</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-navy" style={{ width: '100%', marginTop: '0.25rem' }}>
                Search Inventory
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <strong>Free</strong>
              <span>Vehicle History Reports</span>
            </div>
            <div className="trust-item">
              <strong>7-Day</strong>
              <span>Exchange Guarantee</span>
            </div>
            <div className="trust-item">
              <strong>0.9% APR</strong>
              <span>Financing Available</span>
            </div>
            <div className="trust-item">
              <strong>24/7</strong>
              <span>Roadside Assistance</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="inventory">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Inventory</p>
            <h2>Featured Vehicles</h2>
            <p>Hand-selected new arrivals and certified pre-owned vehicles, inspected and ready to drive.</p>
          </div>

          <div className="filter-tabs" role="tablist">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={`filter-tab${filter === f.id ? ' active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="inventory-grid">
            {filtered.map((car) => (
              <article key={car.id} className="car-card">
                <div className="car-image">
                  <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} loading="lazy" />
                  <span className={`car-badge ${car.badgeClass}`}>{car.badge}</span>
                </div>
                <div className="car-body">
                  <h3>{car.year} {car.make} {car.model}</h3>
                  <p className="car-trim">{car.trim}</p>
                  <div className="car-specs">
                    <span>{formatMileage(car.mileage)}</span>
                    <span>AWD</span>
                    <span>Auto</span>
                  </div>
                  <div className="car-footer">
                    <div className="car-price">
                      <strong>{formatPrice(car.price)}</strong>
                      <span>or $499/mo est.</span>
                    </div>
                    <a href="#contact" className="btn btn-outline btn-sm">Details</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="services">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What We Offer</p>
            <h2>Complete Automotive Services</h2>
            <p>From your first test drive to every oil change — we're with you for the life of your vehicle.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚗</div>
              <h3>New & Used Sales</h3>
              <p>Browse our full inventory of premium brands with transparent, no-haggle pricing.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💳</div>
              <h3>Financing & Leasing</h3>
              <p>Work with our in-house finance team for competitive rates and flexible terms.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Trade-In Appraisal</h3>
              <p>Get a fair market value for your current vehicle in minutes — online or in person.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Service & Parts</h3>
              <p>Factory-trained technicians, OEM parts, and complimentary loaner vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80"
                alt="Premier Motors showroom"
                loading="lazy"
              />
            </div>
            <div className="about-content">
              <p className="eyebrow">About Us</p>
              <h2>A dealership built on trust, not pressure</h2>
              <p>
                For over three decades, Premier Motors has been the Peninsula's go-to destination
                for luxury and performance vehicles. As a family-owned business, we treat every
                customer like a neighbor — because many of them are.
              </p>
              <p>
                Our certified technicians, dedicated finance advisors, and no-pressure sales
                approach have earned us a 4.9-star rating and thousands of repeat customers.
              </p>
              <div className="about-features">
                <span className="about-feature">Factory-authorized dealer</span>
                <span className="about-feature">150-point inspection</span>
                <span className="about-feature">Complimentary loaners</span>
                <span className="about-feature">Price match guarantee</span>
              </div>
              <a href="#contact" className="btn btn-primary">Visit Our Showroom</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="reviews">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Customer Reviews</p>
            <h2>What Our Customers Say</h2>
            <p>Rated 4.9 out of 5 stars across 800+ verified reviews.</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <blockquote>"{t.text}"</blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-content">
              <h2>Ready to find your next car?</h2>
              <p>
                Schedule a test drive, get a trade-in quote, or speak with our finance team.
                We respond within one business hour.
              </p>
              <div className="cta-contact">
                <a href="tel:6505550199">📞 (650) 555-0199</a>
                <a href="mailto:sales@premiermotors.com">✉️ sales@premiermotors.com</a>
                <a href="#">📍 1200 Auto Row, San Carlos, CA 94070</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Request Information</h3>
              {submitted && (
                <p className="form-success">Thank you! We'll be in touch shortly.</p>
              )}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  className="form-input"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  id="message"
                  className="form-input"
                  placeholder="I'm interested in..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <div className="logo-mark">PM</div>
                <div className="logo-text">
                  <strong style={{ color: '#fff' }}>Premier Motors</strong>
                  <span>Est. 1987</span>
                </div>
              </a>
              <p>
                Your trusted source for premium new and pre-owned vehicles on the San Francisco Peninsula.
              </p>
            </div>
            <div>
              <h4>Inventory</h4>
              <ul>
                <li><a href="#inventory">New Vehicles</a></li>
                <li><a href="#inventory">Certified Pre-Owned</a></li>
                <li><a href="#inventory">Electric Vehicles</a></li>
                <li><a href="#contact">Schedule Test Drive</a></li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Financing</a></li>
                <li><a href="#services">Trade-In</a></li>
                <li><a href="#services">Service Center</a></li>
                <li><a href="#services">Parts & Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4>Hours</h4>
              <ul>
                <li>Mon–Fri: 9am – 7pm</li>
                <li>Saturday: 9am – 6pm</li>
                <li>Sunday: 10am – 5pm</li>
                <li><a href="tel:6505550199">(650) 555-0199</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Premier Motors. All rights reserved.</span>
            <span>
              <a href="#">Privacy Policy</a>
              {' · '}
              <a href="#">Terms of Service</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
