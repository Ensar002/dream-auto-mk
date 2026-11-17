import "./globals.css";
const cars = [
  {
    name: "Mercedes-AMG GT",
   type: "Luxury Sports Coupe",
    price: "€85,000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900",
  },
  {
     name: "BMW M5",
  type: "High-Performance Sedan",
    price: "€72,000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
  },
  {
   name: "Audi R8 V10",
   type: "V10 Supercar",
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
          <a href="/contact">Contact</a>
        </div>

       
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
             <img src={car.image} alt={car.name} className="car-image" />
              <div className="car-info">
                <p>{car.type}</p>
                <h3>{car.name}</h3>
                <strong>{car.price}</strong>
               
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
