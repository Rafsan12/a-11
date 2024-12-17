import Footer from "../shared/Footer";
import MyCarousel from "./Carousel";
import Feedback from "./Feedback";
import Reviews from "./Reviews";
import Topics from "./Topics";
import Trends from "./Trends";

const Index = () => {
  return (
    <>
      <Topics />
      <MyCarousel />
      <Trends />
      <Feedback />
      <Reviews />
      <Footer />
    </>
  );
};

export default Index;
