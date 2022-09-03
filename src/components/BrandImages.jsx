import imageOne from "../styles/images/brand-images/1.png";
import imageTwo from "../styles/images/brand-images/2.png";
import imageThree from "../styles/images/brand-images/3.png";
import imageFour from "../styles/images/brand-images/4.png";
import imageFive from "../styles/images/brand-images/5.png";
import imageSix from "../styles/images/brand-images/6.png";
import imageSeven from "../styles/images/brand-images/7.png";
import imageEight from "../styles/images/brand-images/8.png";
import imageNine from "../styles/images/brand-images/9.png";
import imageTen from "../styles/images/brand-images/10.jpg";
import imageEleven from "../styles/images/brand-images/11.jfif";
import imageTwelve from "../styles/images/brand-images/12.png";
import imageThirteen from "../styles/images/brand-images/13.png";
import imageFourteen from "../styles/images/brand-images/14.jfif";
import imageFifteen from "../styles/images/brand-images/15.png";
import imageSixteen from "../styles/images/brand-images/16.jpg";
import imageSeventeen from "../styles/images/brand-images/17.svg";
import imageEighteen from "../styles/images/brand-images/18.png";
import imageNineteen from "../styles/images/brand-images/19.png";
import imageTwenty from "../styles/images/brand-images/20.jfif";
import imageTwentyOne from "../styles/images/brand-images/21.png";
import imageTwentyTwo from "../styles/images/brand-images/22.png";
import imageTwentyThree from "../styles/images/brand-images/23.png";
import imageTwentyFour from "../styles/images/brand-images/24.svg";

const images = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  imageNine,
  imageTen,
  imageEleven,
  imageTwelve,
  imageThirteen,
  imageFourteen,
  imageFifteen,
  imageSixteen,
  imageSeventeen,
  imageEighteen,
  imageNineteen,
  imageTwenty,
  imageTwentyOne,
  imageTwentyTwo,
  imageTwentyThree,
  imageTwentyFour,
];

const BrandImages = () => {
  return (
    <div id="brands">
      <h2 className="brand-images__title">Our Brands</h2>
      <div className="brand-images__image-container">
        {images.map((image, index) => {
          return (
            <img
              className="brand-images__image"
              src={image}
              alt="brand logo"
              key={`brand-image-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrandImages;
