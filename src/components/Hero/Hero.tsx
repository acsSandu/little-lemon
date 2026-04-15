import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroFood from '../../assets/hero-food.jpg';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Little Lemon</h1>
          <h2 className="hero__city">Chicago</h2>
          <p className="hero__description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="hero__cta" onClick={() => navigate('/booking')}>Reserve a table</button>
        </div>
        <div className="hero__image-wrapper">
          <img src={heroFood} alt="Delicious food at Little Lemon" className="hero__image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;