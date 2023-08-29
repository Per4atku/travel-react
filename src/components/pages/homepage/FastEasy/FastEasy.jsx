import './fastEasy.scss';
import fastEasy from '/assets/home/fastEasy.png';
import destination from '/assets/home/destination.svg';
import check_availability from '/assets/home/check_availability.svg';
import letsgo from '/assets/home/letsgo.svg';

const FastEasy = () => {
  return (
    <div className="home__fasteasy">
      <div className="home__fasteasy-content">
        <h3>Fast & Easy</h3>
        <h1>Get Your Favourite Resort Bookings</h1>

        <div className="home__fasteasy-content_item">
          <img src={destination} alt="Destination" />
          <div className="home__fasteasy-content_item-container">
            <h2>Choose destination</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
          </div>
        </div>

        <div className="home__fasteasy-content_item">
          <img src={check_availability} alt="Check Availability" />
          <div className="home__fasteasy-content_item-container">
            <h2>Check Availability</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
          </div>
        </div>

        <div className="home__fasteasy-content_item">
          <img src={letsgo} alt="Let's go" />
          <div className="home__fasteasy-content_item-container">
            <h2>Let’s Go</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
          </div>
        </div>
      </div>
      <img className="home__fasteasy-img" src={fastEasy} alt="Fast and Easy" />
    </div>
  );
};

export default FastEasy;
