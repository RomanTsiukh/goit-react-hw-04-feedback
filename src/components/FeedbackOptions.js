import styled from 'styled-components';
import PropTypes from 'prop-types';

const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  border-radius: 10px;
  &:hover {
    background-color: purple;
    color: white;
    transform: scale(1.2);
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {Object.keys(options).map(key => (
        <li key={key}>
          <Button type="button" onClick={() => onLeaveFeedback(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
