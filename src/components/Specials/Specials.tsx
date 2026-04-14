import './Specials.css';
import SpecialCard, { type Special } from './SpecialCard';
import greekSalad from '../../assets/greek-salad.jpg';
import bruschetta from '../../assets/bruschetta.jpg';
import lemonDessert from '../../assets/lemon-dessert.jpg';

const SPECIALS: Special[] = [
  {
    id: 1,
    name: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    rating: 4.2,
    image: greekSalad,
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings include basil pesto, fresh tomatoes and pancetta.',
    rating: 4.5,
    image: bruschetta,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    rating: 4.8,
    image: lemonDessert,
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials__container">
        <div className="specials__header">
          <h2 className="specials__title">This weeks specials!</h2>
          <button className="specials__menu-btn">Online Menu</button>
        </div>
        <div className="specials__grid">
          {SPECIALS.map((special) => (
            <SpecialCard key={special.id} special={special} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;