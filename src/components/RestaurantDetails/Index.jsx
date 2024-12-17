import Footer from "../shared/Footer";
import Breadcrumbs from "./Breadcrumb";
import Discover from "./Discover";
import Hero from "./Hero";
import Information from "./Information";
import Magnificent from "./Magnificent";
import OverAllRating from "./OverAllRating";
import Reviews from "./Reviews";

const IndexRes = () => {
  return (
    <>
      <div>
        <Breadcrumbs />
        <Hero />
        <Magnificent />
        <Information />
        <OverAllRating />
        <Reviews />
        <Discover />
      </div>
      <Footer />
    </>
  );
};

export default IndexRes;
