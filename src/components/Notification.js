import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionBox = styled.section`
  margin-bottom: 20px;
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
`;

const Notification = ({ message }) => (
  <SectionBox>
    <Title>{message}</Title>
  </SectionBox>
);

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
