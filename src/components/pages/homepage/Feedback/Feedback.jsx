import './feedback.scss';
import './slider.scss';
import feedbacksData from './feedback.json';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';

const FeedbackSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    //Simulating fetching data

    setFeedbacks(feedbacksData);
  }, []);

  return (
    <Slider {...settings}>
      {feedbacks.map((feedback, index) => (
        <div className="slide" key={index}>
          <img src={feedback.photo} alt="User's Photo" />
          <p>{feedback.text}</p>
          <h4>{feedback.author}</h4>
        </div>
      ))}
    </Slider>
  );
};

const Feedback = () => {
  return (
    <div className="home__feedback-bg">
      <div className="home__feedback">
        <h2>Promotion</h2>
        <h1>See What Our Clients Say About Us</h1>
      </div>
      <FeedbackSlider />
    </div>
  );
};

export default Feedback;
