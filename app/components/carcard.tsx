
type CarCardProps = {
  name: string;
  image: string;
  price: string;
  year: string;
  mileage: string;
  fuel: string;
};

export default function CarCard({
  name,
  image,
  price,
  year,
  mileage,
  fuel,
}: CarCardProps) {
  return (
    <div className="car-card">
      <img src={image} alt={name} />

      <div className="car-info">
        <h3>{name}</h3>

        <div className="car-details">
          <span>{year}</span>
          <span>{mileage}</span>
          <span>{fuel}</span>
        </div>

        <div className="car-bottom">
          <h3>{price}</h3>
          <a href="/contact">Contact →</a>
        </div>
      </div>
    </div>
  );
}
