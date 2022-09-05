import Map from "./Map";

const About = () => {
  return (
    <>
      <div className="page__body about__body">
        <div>
          <div className="about__titles-container">
            <h3>Ωράριο λειτουργίας</h3>
            <ul>
              <li>Κυριακή Κλειστά</li>
              <li>Δευτέρα 09:00 - 21:00</li>
              <li>Τρίτη 09:00 - 21:00</li>
              <li>Τετάρτη 09:00 - 21:00</li>
              <li>Πέμπτη 09:00 - 21:00</li>
              <li>Παρασκευή 09:00 - 21:00</li>
              <li>Σάββατο 09:00 - 20:00</li>
            </ul>
          </div>
          <div className="about__titles-container">
            <h3>Επικοινωνία</h3>
            <ul>
              <li>Τηλέφωνο: +30 21 0823 9627</li>
            </ul>
          </div>
          <div className="about__titles-container">
            <h3>Διεύθυνση</h3>
            <ul>
              <li>Αγίου Μελετίου & Σποράδων, Αθήνα 113 61</li>
            </ul>
          </div>
        </div>
        <Map />
      </div>
    </>
  );
};

export default About;
