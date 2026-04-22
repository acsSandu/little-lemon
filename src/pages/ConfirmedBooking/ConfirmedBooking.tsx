import Navbar from '../../components/Navbar/Navbar';

function ConfirmedBooking() {
  return (
    <main>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '4rem 1rem' }} aria-labelledby="confirmed-title">
        <h1 id="confirmed-title">Booking Confirmed!</h1>
        <p>Thank you for your reservation. We look forward to seeing you at Little Lemon.</p>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
