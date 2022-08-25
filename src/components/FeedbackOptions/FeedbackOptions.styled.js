import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  border-radius: 10px;
  &:hover {
    background-color: purple;
    color: white;
    transform: scale(1.2);
  }
`;
