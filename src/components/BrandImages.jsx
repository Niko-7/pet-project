import imageOne from "../styles/images/brand-images/1.png";
import imageTwo from "../styles/images/brand-images/2.png";
import imageThree from "../styles/images/brand-images/3.png";
import imageFour from "../styles/images/brand-images/4.png";
import imageFive from "../styles/images/brand-images/5.png";
import imageSix from "../styles/images/brand-images/6.png";
import imageSeven from "../styles/images/brand-images/7.png";
import imageEight from "../styles/images/brand-images/8.png";
import imageNine from "../styles/images/brand-images/9.png";

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
