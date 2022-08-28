import mapImage from "../styles/images/map.png";

const About = () => {
  return (
    <>
      <div className="page__body about__body">
        <div className="about__titles-container">
          <h3>Opening Times</h3>
          <ul>
            <li>Sunday Closed</li>
            <li>Monday 9am till 9pm</li>
            <li>Tuesday 9am–9pm</li>
            <li>Wednesday 9am–9pm</li>
            <li>Thursday 9am–9pm</li>
            <li>Friday 9am–9pm</li>
            <li>Saturday 9am–8pm</li>
          </ul>
        </div>
        <div className="about__titles-container">
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: +30 21 0823 9627</li>
          </ul>
        </div>
        <div className="about__titles-container">
          <h3>Address</h3>
          <ul>
            <li>Αγίου Μελετίου &, Sporadon 34, Athina 113 61, Greece</li>
          </ul>
        </div>
        <div className="about__image-container">
          <img
            className="about__image"
            src={mapImage}
            alt="store location map"
          />
        </div>
      </div>
    </>
  );
};

export default About;
