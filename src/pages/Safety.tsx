import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Safety = () => (
    <>
        <Navbar />
        <div className="flex flex-col min-h-screen">
            <main className="container py-16">
                <h1 className="text-3xl font-bold mb-4">Safety Tips</h1>
                <ul className="list-disc ml-6">
                    <li>Always verify your travel partner’s profile.</li>
                    <li>Meet in public places for the first time.</li>
                    <li>Share your plans with friends or family.</li>
                    <li>Trust your instincts; if something feels off, leave.</li>
                    <li>Keep your personal information private.</li>
                    <li>Consider using a safety app to share your location.</li>
                </ul>
            </main>
        </div>
        <Footer />
    </>
);

export default Safety;