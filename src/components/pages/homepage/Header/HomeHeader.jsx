import './homeHeader.scss';
import curve from '/assets/home/curve.svg';
import { IoIosArrowDown } from 'react-icons/io';

const Form = () => {
  return (
    <>
      <input type="text" placeholder="Where to?‎ " />
      <div className="home__header-form_line"></div>
      <button type="button" className="home__header-form_button">
        Travel Type
        <IoIosArrowDown />
      </button>
      <div className="home__header-form_line"></div>
      <button type="button" className="home__header-form_button">
        Duration
        <IoIosArrowDown />
      </button>
      <button type="button" className="home__header-form_submit">
        Submit
      </button>
    </>
  );
};
const People = () => {
  const peopleImages = [
    'https://d1.skrinshoter.ru/s/200823/ZdvCysch.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-20-08-2023%2003:59:39.jpg',
    'https://skrinshoter.ru/s/200823/xymgLIWR.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-20-08-2023%2008:24:21.jpg',
    'https://skrinshoter.ru/s/200823/JrVuNac7.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-20-08-2023%2008:25:05.jpg',
    'https://skrinshoter.ru/s/200823/BqD3ClXz.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-20-08-2023%2008:25:53.jpg',
    'https://skrinshoter.ru/s/200823/68QXL4KX.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-20-08-2023%2008:26:44.jpg',
    'https://skrinshoter.ru/s/200823/jmlfJclF.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-20-08-2023%2008:28:04.jpg',
    'https://skrinshoter.ru/s/200823/XnulLmfH.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-20-08-2023%2008:29:05.jpg',
  ];

  return (
    <>
      {peopleImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Person ${index + 1}`}
          className="home__header-people_roundImage"
          style={{
            zIndex: 7 - index,
            left: index * -12 + 'px',
          }}
        />
      ))}
      <p>2,500 people booked Tommorowland Event in last 24 hours</p>
    </>
  );
};

const HomeHeader = () => {
  return (
    <header className="home__header">
      <div className="home__header-title">
        <img src={curve} alt="curve" />
        <h1>No matter where you’re going to, we’ll take you there</h1>
      </div>
      <form className="home__header-form">
        <Form />
      </form>
      <div className="home__header-people">
        <People />
      </div>
    </header>
  );
};

export default HomeHeader;
