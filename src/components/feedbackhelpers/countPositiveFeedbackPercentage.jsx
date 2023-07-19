import PropTypes from 'prop-types';
import countTotalFeedback from './countTotalFeedback';

const countPositiveFeedbackPercentage = feedack => {
  const totalFeedback = countTotalFeedback(feedack);
  const positiveFeedback = feedack.good;
  return totalFeedback === 0
    ? 0
    : Math.round((positiveFeedback / totalFeedback) * 100);
};

countPositiveFeedbackPercentage.propTypes = {
  feedack: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default countPositiveFeedbackPercentage;
