export default function AboutPage() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <p className="about-label">WHO WE ARE</p>
        <h1>About <span>DREAM AUTO MK</span></h1>
        <p>
          Your trusted destination for quality cars and unforgettable journeys.
        </p>
      </section>

      {/* About Content */}
      <section className="about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000"
            alt="Luxury car"
          />
        </div>

        <div className="about-text">
          <p className="about-label">ABOUT OUR DEALERSHIP</p>

          <h2>Driving Your Dreams Forward</h2>

          <p>
            Welcome to DREAM AUTO MK, your destination for finding the
            perfect vehicle. We are passionate about cars and dedicated
            to helping every customer find a vehicle that matches their
            needs and lifestyle.
          </p>

          <p>
            Our goal is to make buying a car simple, comfortable and
            enjoyable. We focus on quality vehicles, competitive prices
            and excellent customer service.
          </p>

          <a href="/cars" className="about-button">
            Explore Our Cars
          </a>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose <span>DREAM AUTO MK?</span></h2>

        <div className="why-container">

          <div className="why-card">
            <div className="why-icon">★</div>
            <h3>Quality Cars</h3>
            <p>Carefully selected vehicles for our customers.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">€</div>
            <h3>Best Prices</h3>
            <p>Competitive prices and great value for your money.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">✓</div>
            <h3>Trusted Service</h3>
            <p>Friendly support throughout your car buying journey.</p>
          </div>

        </div>
      </section>

    </main>
  );
}