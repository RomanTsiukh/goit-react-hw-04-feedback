import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <div>Good:{good}</div>
    <div>Neutral:{neutral}</div>
    <div>Bad:{bad}</div>
    <div>Total:{total}</div>
    <div>Positive fedback:{positivePercentage}%</div>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};
