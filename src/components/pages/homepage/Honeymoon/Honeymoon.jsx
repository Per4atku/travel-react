import './honeymoon.scss';
import honeymoon from '/assets/home/honeymoon.png';

const Honeymoon = () => {
  return (
    <div className="home__honeymoon">
      <img src={honeymoon} alt="honeymoon" />
      <div className="home__honeymoon-content">
        <h2>Honeymoon Specials</h2>
        <h1>Our Romantic Tropical Destinations</h1>
        <p>
          Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
          laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta
          recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
        </p>
        <button>View Packages</button>
      </div>
    </div>
  );
};

export default Honeymoon;
