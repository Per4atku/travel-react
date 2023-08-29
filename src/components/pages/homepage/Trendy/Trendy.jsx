import { useEffect, useState } from 'react';
import './trendy.scss';
import packagesData from './trendy_packages.json';
import { BiSolidStar } from 'react-icons/bi'; //Star
import ui_user from '/assets/home/ui_user.svg';
import ui_calendar from '/assets/home/ui_calendar.svg';
import ui_location from '/assets/home/ui_location.svg';

const RatingStars = ({ rating }) => {
  const maxStars = 5;
  const numericRating = parseInt(rating, 10);

  const starElements = Array.from({ length: maxStars }).map((_, index) => (
    <BiSolidStar
      size={16}
      key={index}
      style={{ color: index < numericRating ? '#FFBA0A' : 'gray' }}
    />
  ));
  return <>{starElements}</>;
};

const Package = ({ packageData }) => {
  return (
    <div className="home__trendy-package">
      <div
        className="home__trendy-package_background"
        style={{ backgroundImage: `url(${packageData.image})` }}>
        <div
          className="home__trendy-package_icon"
          style={{ backgroundImage: `url(${packageData.country_icon})` }}></div>
      </div>

      <div className="home__trendy-package_info">
        <div className="home__trendy-package_info-duration">
          <img src={ui_calendar} alt="Calender" />
          <p>{packageData.duration}</p>
        </div>
        <div className="home__trendy-package_info-amount">
          <img src={ui_user} alt="User" />
          <p>{packageData.people_amount}</p>
        </div>
      </div>

      <div className="home__trendy-package_main">
        <h2>{packageData.name}</h2>
        <div>
          <RatingStars rating={packageData.rating} />
        </div>
      </div>

      <div className="home__trendy-package_location">
        <img src={ui_location} alt="Location" />
        <p>{packageData.location}</p>
      </div>

      <div className="home__trendy-package_price">
        <h2>{packageData.discounted_price}</h2>
        <h3>{packageData.non_discounted_price}</h3>
      </div>

      <div className="home__trendy-package_description">
        Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod
        eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
        laudantium internos.
      </div>

      <button>Explore Now</button>
    </div>
  );
};

const Trendy = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Simulating fetching data asynchronously
    // Replace this with actual fetching code if needed
    setPackages(packagesData);
  }, []);
  return (
    <div className="home__trendy">
      <div className="home__trendy-text">
        <h2>Trendy</h2>
        <h1>Our Trending Tour Packages</h1>
      </div>

      <div className="home__trendy-packages">
        {packages.map((packageData, index) => (
          <Package key={index} packageData={packageData} />
        ))}
      </div>
    </div>
  );
};

export default Trendy;
