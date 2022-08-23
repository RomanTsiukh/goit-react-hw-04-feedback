import { Component } from 'react';
import styled from 'styled-components';
import FeedbackOptions from './FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from './Notification';
import Section from './Section';

const Box = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
`;

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateClick = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (previousValue, elem) => previousValue + elem,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }

    if (this.state.good > 0) {
      return Math.round((100 * this.state.good) / this.countTotalFeedback());
    }
  };

  render() {
    return (
      <Box>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleStateClick}
          />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Box>
    );
  }
}

export default Feedback;
