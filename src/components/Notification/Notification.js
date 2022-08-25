import PropTypes from 'prop-types';
import { SectionBox, Title } from './Notification.styled';

const Notification = ({ message }) => (
  <SectionBox>
    <Title>{message}</Title>
  </SectionBox>
);

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
