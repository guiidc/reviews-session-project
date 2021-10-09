import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review () {
  const [index, setIndex] = useState(0);
  const { name, job, image, text} = people[index];

  const nextPerson = () => {
    if(index < people.length - 1) return setIndex(index + 1);
    setIndex(0);
  }

  const prevPerson = () => {
    if(!index) return setIndex(people.length - 1);
    setIndex( index - 1)
  }

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index ) return setIndex(randomNumber + 1);
    setIndex(randomNumber);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={ image } alt={ name } className="person-img" />
        <span className="quote">
          <FaQuoteRight className="quote-icon" />
        </span>
      </div>
      <h4 className="author">{ name }</h4>
      <p className="job">{ job }</p>
      <p className="info">{ text }</p>
      <div>
        <button className="prev-btn" onClick={ prevPerson }>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={ nextPerson }>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={ randomPerson }>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
