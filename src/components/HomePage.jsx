import BackToTopButton from "./BackToTopButton";
import BrandImages from "./BrandImages";
import FacebookFeed from "./FacebookFeed";
import GoogleReviews from "./GoogleReviews";
import HomePageNavigation from "./HomePageNavigation";
import HomePageSlider from "./HomePageSlider";
// import Cats from "./Cats";
// import Dogs from "./Dogs";
// import Reptiles from "./Reptiles";

const HomePage = () => {
  return (
    <div className="page__body">
      <HomePageNavigation />
      <HomePageSlider />
      <BrandImages />
      <FacebookFeed />
      <GoogleReviews />
      {/* <Cats />
      <Dogs />
      <Reptiles /> */}
      <BackToTopButton />
    </div>
  );
};

export default HomePage;
