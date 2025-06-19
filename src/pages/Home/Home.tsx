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
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedListings />
      <RecentlyListed />
      <HowItWorks />
      <PopularCategories />
      <WhyChoose />
      <Newsletter />
      <Footer />
    </MainLayout>
  );
};

export default Home;
