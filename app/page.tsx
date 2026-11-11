
const cars = [
  {
    name: "Mercedes-Benz S-Class",
    type: "Luxury Sedan",
    price: "€85,000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900",
  },
  {
    name: "BMW M4 Competition",
    type: "Sport Coupe",
    price: "€72,000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
  },
  {
    name: "Audi RS6 Avant",
    type: "Performance Wagon",
    price: "€95,000",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=900",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="/" className="logo">DREAM <span>AUTO MK</span></a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/cars">Our Cars</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/cars" className="nav-button">Explore Cars</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO DREAM AUTO MK</p>

          <h1>
            DRIVE YOUR
            <br />
            <span>DREAM.</span>
          </h1>

          <p className="hero-description">
            Discover exceptional cars. Experience premium quality.
            Find the perfect vehicle for your next journey.
          </p>

          <div className="hero-buttons">
            <a href="/cars" className="primary-button">Explore Our Cars</a>
            <a href="/about" className="secondary-button">Discover More</a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>QUALITY CARS. UNFORGETTABLE JOURNEYS.</span>
          <span>EST. DREAM AUTO MK</span>
        </div>
      </section>

      <section className="featured">
        <p className="eyebrow">OUR SELECTION</p>
        <h2>Featured <span>Vehicles</span></h2>

        <div className="car-grid">
          {cars.map((car) => (
            <article className="car-card" key={car.name}>
              <div className="car-placeholder">DREAM AUTO MK</div>
              <div className="car-info">
                <p>{car.type}</p>
                <h3>{car.name}</h3>
                <strong>{car.price}</strong>
                <a href="/cars">View Details →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 DREAM AUTO MK. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
