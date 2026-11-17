
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
         image="/images/cars/mercedes.jpg"
          price="€35,900"
          year="2022"
          mileage="35,000 km"
          fuel="Diesel"
        />

        <CarCard
          name="BMW 5 Series"
          image="/images/cars/bmw.jpg"
          price="€32,500"
          year="2021"
          mileage="48,000 km"
          fuel="Diesel"
        />

        <CarCard
          name="Audi RS7"
          image="/images/cars/audi.jpg"
          price="€65,000"
          year="2023"
          mileage="18,000 km"
          fuel="Petrol"
        />
      </div>
    </section>
  );
}
