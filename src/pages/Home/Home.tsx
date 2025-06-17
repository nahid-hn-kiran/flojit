import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "./sections/HeroSection";
import FeaturedListings from "./sections/FeaturedListings";
import RecentlyListed from "./sections/RecentlyListed";
import HowItWorks from "./sections/HowItWorks";
import PopularCategories from "./sections/PopularCategories";
import WhyChoose from "./sections/WhyChoose";
import Newsletter from "./sections/Newsletter";
import "./Home.css";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedListings />
        <RecentlyListed />
        <HowItWorks />
        <PopularCategories />
        <WhyChoose />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
