import './SpecialCard.css';

export interface Special {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
}

interface SpecialCardProps {
  special: Special;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <span className="special-card__stars" aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}
      {half ? '½' : ''}
      {'☆'.repeat(empty)}
    </span>
  );
}

function SpecialCard({ special }: SpecialCardProps) {
  return (
    <article className="special-card">
      <img
        src={special.image}
        alt={special.name}
        className="special-card__image"
      />
      <div className="special-card__body">
        <div className="special-card__header">
          <h3 className="special-card__name">{special.name}</h3>
          <span className="special-card__price">${special.price.toFixed(2)}</span>
        </div>
        <div className="special-card__rating">
          <StarRating rating={special.rating} />
          <span className="special-card__rating-value">{special.rating}</span>
        </div>
        <p className="special-card__description">{special.description}</p>
        <button className="special-card__order-btn">Order a delivery 🛵</button>
      </div>
    </article>
  );
}

export default SpecialCard;