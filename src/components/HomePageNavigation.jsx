import React from "react";

const HomePageNavigation = () => {
  return (
    <>
      <div className="home-page-nav__container">
        <a href="#brands" className="home-page-nav__link">
          Brands
        </a>
        <a href="#cats" className="home-page-nav__link">
          Cats
        </a>
        <a href="#dogs" className="home-page-nav__link">
          Dogs
        </a>
        <a href="#reptiles" className="home-page-nav__link">
          Reptiles
        </a>
      </div>
    </>
  );
};

export default HomePageNavigation;
