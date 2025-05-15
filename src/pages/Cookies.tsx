import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => (
  <>
    <Navbar />
    <div className="flex flex-col min-h-screen">
      <main className="container py-16">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p>We use cookies to improve your experience. By using our site, you accept our use of cookies.</p>
      </main>
    </div>
    <Footer />
  </>
);

export default Cookies;