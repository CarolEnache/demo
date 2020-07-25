import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: #ff4f01;
  width: 100%;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

export const FilterContainer = styled.div`
  padding: 1rem;
  background-color: white;
  height: fit-content;
  box-shadow: 0px 1px 4px 0px #888888;
  @media (min-width: 768px) {
    min-width: 11rem;
    margin: 1.5rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
}
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0;
`;

export const ListHeader = styled.p`
  font-weight: bold;
`;
