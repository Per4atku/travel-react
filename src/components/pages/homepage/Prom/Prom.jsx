import './prom.scss';
import cardsData from './prom.json';
import { useState } from 'react';
import { useEffect } from 'react';

const Card = ({ card }) => {
  // home__prom-card will be changed to <Link> from React Routing soon
  return (
    <div className="home__prom-card">
      <div
        className="home__prom-card_background"
        style={{ backgroundImage: `url(${card.image})` }}></div>

      <div className="home__prom-card_price">
        <h3>{card.price}</h3>
      </div>
      <h2>{card.name}</h2>
      <p>{card.description}</p>
    </div>
  );
};
const Prom = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simulating fetching data asynchronously
    // Replace this with actual fetching code if needed
    setCards(cardsData);
  }, []);

  return (
    <div className="home__prom">
      <div className="home__prom-text">
        <h2>Promotion</h2>
        <h1>We Provide You Best Europe Sightseeing Tours</h1>
        <p>
          Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
          laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta
          recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
        </p>
        <button>View Packages</button>
      </div>
      <div className="home__prom-cards">
        {cards.map((card, index) => (
          <Card key={index} card={card} /> // Use the Card component for each destination
        ))}
      </div>
    </div>
  );
};

export default Prom;
