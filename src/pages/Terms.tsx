import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
    <>
        <Navbar />
        <div className="flex flex-col min-h-screen">
            <main className="container py-16">
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                <p>By using Travel Share Adventures, you agree to our terms and conditions. Please read them carefully.</p>
                <h2 className="text-2xl font-semibold mt-8">User Responsibilities</h2>
                <p>As a user, you are responsible for maintaining the confidentiality of your account and password.</p>
                <h2 className="text-2xl font-semibold mt-8">Limitation of Liability</h2>
                <p>Travel Share Adventures is not liable for any damages arising from the use of our services.</p>
            </main>
        </div>
        <Footer />
    </>
);

export default Terms;