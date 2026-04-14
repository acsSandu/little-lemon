import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Specials from '../../components/Specials/Specials';

function Home() {
  return (
    <main className="home">
      <Navbar />
      <Hero />
      <Specials />
    </main>
  );
}

export default Home;