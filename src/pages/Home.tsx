import Hero from "../components/sections/Hero";
import FuelPrices from "../components/sections/FuelPrices";
import ProductsPreview from "../components/sections/ProductsPreview";
import ServicesPreview from "../components/sections/ServicesPreview";
import SupplySection from "../components/sections/SupplySection";
import HomeCTA from "../components/sections/HomeCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <FuelPrices />
      <ProductsPreview />
      <ServicesPreview />
      <SupplySection />
      <HomeCTA />
    </>
  );
};

export default Home;