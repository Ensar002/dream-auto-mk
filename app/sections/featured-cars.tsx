
import CarCard from "../components/carcard";

export default function FeaturedCars() {
  return (
    <section className="featured-section">
      <div className="section-heading">
        <p>OUR COLLECTION</p>
        <h2>Featured Vehicles</h2>
        <span>
          Discover our selection of premium vehicles.
        </span>
      </div>

      <div className="car-grid">
        <CarCard
          name="Mercedes-Benz E-Class"
          image="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900"
          price="€35,900"
          year="2022"
          mileage="35,000 km"
          fuel="Diesel"
        />

        <CarCard
          name="BMW 5 Series"
          image="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900"
          price="€32,500"
          year="2021"
          mileage="48,000 km"
          fuel="Diesel"
        />

        <CarCard
          name="Audi RS7"
          image="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=900"
          price="€65,000"
          year="2023"
          mileage="18,000 km"
          fuel="Petrol"
        />
      </div>
    </section>
  );
}
