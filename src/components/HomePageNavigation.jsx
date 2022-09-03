import cat from "../styles/images/animal-icons/cat.png";
import dog from "../styles/images/animal-icons/dog.png";
import lizard from "../styles/images/animal-icons/lizard.png";
import brand from "../styles/images/animal-icons/brand.png";
import fish from "../styles/images/animal-icons/fish.png";
import bird from "../styles/images/animal-icons/bird.png";
import hamster from "../styles/images/animal-icons/hamster.png";

const HomePageNavigation = () => {
  return (
    <>
      <div className="home-page-nav__container">
        <a href="#brands" className="home-page-nav__link">
          <div className="home-page-nav__icon-container">
            <img src={brand} alt="brand icon" />
          </div>
          <div className="home-page-nav__icon-text">Brands</div>
        </a>
        <a href="#cats" className="home-page-nav__link">
          <div className="home-page-nav__icon-container">
            <img src={cat} alt="cat icon" />
          </div>
          <div className="home-page-nav__icon-text">Cats</div>
        </a>
        <a href="#dogs" className="home-page-nav__link">
          <div className="home-page-nav__icon-container">
            <img src={dog} alt="dog icon" />
          </div>
          <div className="home-page-nav__icon-text">Dogs</div>
        </a>
        <a href="#reptiles" className="home-page-nav__link">
          <div className="home-page-nav__icon-container">
            <img src={lizard} alt="lizard icon" />
          </div>
          <div className="home-page-nav__icon-text">Reptiles</div>
        </a>
        <a href="#fish" className="home-page-nav__link">
          <div className="home-page-nav__icon-container">
            <img src={fish} alt="fish icon" />
          </div>
          <div className="home-page-nav__icon-text">Fish</div>
        </a>
        <a href="#bird" className="home-page-nav__link">
          <div className="home-page-nav__icon-container">
            <img src={bird} alt="bird icon" />
          </div>
          <div className="home-page-nav__icon-text">Bird</div>
        </a>
        <a href="#hamster" className="home-page-nav__link">
          <div className="home-page-nav__icon-container">
            <img src={hamster} alt="hamster icon" />
          </div>
          <div className="home-page-nav__icon-text">Rodents</div>
        </a>
      </div>
    </>
  );
};

export default HomePageNavigation;
