import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <NavBar />
    <div className="flex flex-col min-h-screen">
      <main className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Have questions? Reach out to us at hello@travelshare.com or use our contact form. We’ll get back to you soon!</p>
      </main>
    </div>
    <Footer />
  </>
);

export default Contact;