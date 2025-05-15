import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
    <>
        <Navbar />
        <div className="flex flex-col min-h-screen">
            <main className="container py-16">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p>Your privacy is important to us. We never share your data without your consent.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection</h2>
                <p>We collect personal information that you provide to us directly, such as your name and email address.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
                <p>Our website uses cookies to enhance user experience. You can choose to accept or decline cookies.</p>
            </main>
        </div>
        <Footer />
    </>
);

export default Privacy;