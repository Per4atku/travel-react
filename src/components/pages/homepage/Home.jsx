import './home.scss';
import './__wrap.scss';
import Navbar from '../../partials/Navbar';
import Footer from '../../partials/Footer';
import HomeHeader from './Header/HomeHeader';
import HomeServices from './HomeServices/homeServices';
import Honeymoon from './Honeymoon/Honeymoon';
import FastEasy from './FastEasy/FastEasy';
import separatorLine from '/assets/home/separatorLine.svg';
import Prom from './Prom/Prom';
import Trendy from './Trendy/Trendy';
import Feedback from './Feedback/Feedback';

const Home = () => {
  return (
    <>
      <div className="home__header-bg">
        <div className="__wrap">
          <Navbar />
          <HomeHeader />
        </div>
      </div>
      <Brands />
      <div className="__wrap">
        <HomeServices />
        <Honeymoon />
        <FastEasy />
      </div>
      <div className="home__separator">
        <div className="home__separator-text">
          <h2>Let’s make your next holiday amazing</h2>
          <img src={separatorLine} alt="Line" />
        </div>
      </div>
      <div className="__wrap">
        <Prom />
      </div>

      <div className="home__explore">
        <div className="home__explore-nature home__explore-item">
          <div className="home__explore-item_content">
            <h2>Promotion</h2>
            <h1>Explore Nature</h1>
            <button>View Packages</button>
          </div>
        </div>
        <div className="home__explore-cities home__explore-item">
          <div className="home__explore-item_content">
            <h2>Promotion</h2>
            <h1>Explore Cities</h1>
            <button>View Packages</button>
          </div>
        </div>
      </div>
      <div className="__wrap">
        <Trendy />
      </div>
      <Feedback />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

const Brands = () => {
  return (
    <div className="home__brands">
      <img src="/assets/home/fly_emirates.png" alt="fly_emirates" />
      <img src="/assets/home/trivago.png" alt="trivago" />
      <img src="/assets/home/airbnb.png" alt="airbnb" />
      <img src="/assets/home/turkish_airlines.png" alt="turkish_airlines" />
      <img src="/assets/home/swiss.png" alt="swiss" />
    </div>
  );
};

export default Home;
