import { useState } from 'react';
import { Box } from './Feedback.styled';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleStateClick = e => {
    const buttonName = e.currentTarget.textContent;
    // console.log(buttonName);

    if (buttonName === 'good') {
      return setGood(prev => prev + 1);
    }

    if (buttonName === 'neutral') {
      return setNeutral(prev => prev + 1);
    }

    if (buttonName === 'bad') {
      return setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }

    if (good > 0) {
      return Math.round((100 * good) / countTotalFeedback());
    }
  };

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleStateClick} />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Box>
  );
}
