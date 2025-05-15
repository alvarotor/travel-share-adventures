import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Press = () => (
  <main className="container py-16">
    <Navbar />
    <h1 className="text-3xl font-bold mb-4">Press</h1>
    <p>Read our latest press releases and media coverage. For press inquiries, contact us at press@travelshare.com.</p>
    <h2 className="text-2xl font-bold mt-8 mb-4">Latest Press Releases</h2>
    <ul className="list-disc pl-5">
      <li>
        <a href="/press-release-1" className="text-blue-500 hover:underline">TravelShare Launches New Features to Enhance User Experience</a>
      </li>
      <li>
        <a href="/press-release-2" className="text-blue-500 hover:underline">TravelShare Partners with Local Businesses to Promote Sustainable Travel</a>
      </li>
      <li>
        <a href="/press-release-3" className="text-blue-500 hover:underline">TravelShare Expands to New Markets: Now Available in Europe</a>
      </li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-4">Media Coverage</h2>
    <ul className="list-disc pl-5">
      <li>
        <a href="/media-coverage-1" className="text-blue-500 hover:underline">TravelShare: The Future of Travel Sharing</a> - TechCrunch
      </li>
      <li>
        <a href="/media-coverage-2" className="text-blue-500 hover:underline">How TravelShare is Changing the Way We Travel</a> - Forbes
      </li>
      <li>
        <a href="/media-coverage-3" className="text-blue-500 hover:underline">TravelShare: A Game Changer in the Travel Industry</a> - The Verge
      </li>
    </ul>
    <Footer />
  </main>
);

export default Press;