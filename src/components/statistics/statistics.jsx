import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ feedback, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <ul>
          <li>good:{feedback.good}</li>
          <li>neutal:{feedback.neutral}</li>
          <li>bad:{feedback.bad}</li>
          <li>total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.isRequired,
};

export default Statistics;
