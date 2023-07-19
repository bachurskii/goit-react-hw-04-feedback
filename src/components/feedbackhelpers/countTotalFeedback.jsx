import PropTypes from 'prop-types';

const countTotalFeedback = feedback => {
  return Object.values(feedback).reduce((acc, value) => acc + value, 0);
};

countTotalFeedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default countTotalFeedback;
