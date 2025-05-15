import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => (
    <>
        <Navbar />
        <div className="flex flex-col min-h-screen">
            <main className="container py-16">
                <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
                <p><strong>Q:</strong> How do I join?<br /><strong>A:</strong> Sign up for free and start connecting!</p>
                <p><strong>Q:</strong> Is it safe?<br /><strong>A:</strong> We take safety seriously. See our Safety Tips page.</p>
            </main>
        </div>
        <Footer />
    </>
);

export default FAQ;