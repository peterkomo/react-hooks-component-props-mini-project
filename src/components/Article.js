import React from 'react';

// The Article component displays an individual article with its title, date, preview, and a
// reading indicator based on the number of minutes required to read the article. It takes
// 'title', 'date', 'preview', and 'minutesToRead' as props.
const Article = ({ title, date = "January 1, 1970", preview, minutesToRead }) => {
  // The 'renderReadingIndicator' function calculates the reading indicator based on the number
  // of minutes and returns a string with coffee cup or bento box emojis.
  const renderReadingIndicator = () => {
    if (minutesToRead < 30) {
      const coffeeCups = Math.ceil(minutesToRead / 5);
      return '☕️'.repeat(coffeeCups) + ` ${minutesToRead} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutesToRead / 10);
      return '🍱'.repeat(bentoBoxes) + ` ${minutesToRead} min read`;
    }
  };

  // The Article component renders the article details and the reading indicator.
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <span>{renderReadingIndicator()}</span>
    </article>
  );
};

export default Article;

