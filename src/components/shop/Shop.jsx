import ProductSection from "../products/ProductSection";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetter from "./NewsLetter";

const Shop = () => {
  return (
    <>
      <Announcement />
      <Header />
      <ProductSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Shop;
