const cars = [
  {
  name: "Range Rover",
  type: "Luxury SUV",
  price: "€85,000",
  image: "https://ymimg1.b8cdn.com/resized/car_model/9404/pictures/13945254/webp_listing_main_ext-3231303031.webp",
},
  {
    name: "BMW M5",
    type: "Performance Sedan",
    price: "€72,000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900",
  },
  {
    name: "Audi R8 V10",
    type: "Supercar",
    price: "€95,000",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=900",
  },
  {
    name: "Porsche 911 Carrera",
    type: "Sports Coupe",
    price: "€89,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
  },
  {
    name: "Mercedes-AMG G63",
    type: "Luxury SUV",
    price: "€115,000",
image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-AMG_G_63_W463_Black_(5).jpg",
  },
  {
  name: "BMW X6 M",
  type: "Performance SUV",
  price: "€78,000",
  image: "https://wallpapers.com/images/file/glossy-black-bmw-x6-m-7twq4m3er5irsxrf.jpg",
},
];

export default function CarsPage() {
  return (
    <main>
      <nav className="navbar">
        <a href="/" className="logo">
          DREAM <span>AUTO MK</span>
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/cars">Our Cars</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="featured">
        <p className="eyebrow">DREAM AUTO MK</p>
        <h2>Our <span>Collection</span></h2>
        <p className="eyebrow">Explore our selection of premium vehicles.</p>

        <div className="car-grid">
          {cars.map((car) => (
            <article className="car-card" key={car.name}>
              <img
                src={car.image}
                alt={car.name}
                className="car-image"
              />

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