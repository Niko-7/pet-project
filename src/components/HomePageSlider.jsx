import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imageOne from "../styles/images/home-page-slider-images/1.jpg";
import imageTwo from "../styles/images/home-page-slider-images/2.png";
import imageThree from "../styles/images/home-page-slider-images/3.png";
import imageFour from "../styles/images/home-page-slider-images/4.jpg";
import imageFive from "../styles/images/home-page-slider-images/5.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 0,
  },
};

const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

const HomePageSlider = () => {
  return (
    <Carousel
      pauseOnHover={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      keyBoardControl={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      //   swipeable={true}
      //   draggable={true}
      //   showDots={true}
      //   removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    >
      {images.map((image, index) => {
        return (
          <div key={`carousel-image-${index}`}>
            <img className="carousel_image_center" src={image} alt="product" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomePageSlider;
