import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => (
    <>
        <NavBar />
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 container py-16">
                <h1 className="text-3xl font-bold mb-4">Careers</h1>
                <p>We're always looking for talented people to join our team! Check back soon for open positions.</p>
            </main>
        </div>
        <Footer />
    </>
);

export default Careers;