import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLieveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map(option => (
        <button key={option} onClick={() => onLieveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLieveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
