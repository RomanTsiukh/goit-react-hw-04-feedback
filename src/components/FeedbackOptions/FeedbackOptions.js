import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={onLeaveFeedback}>{option}</Button>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
