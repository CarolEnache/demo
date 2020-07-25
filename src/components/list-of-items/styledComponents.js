import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  justify-content: space-around;
  @media (min-width: 768px) {
    justify-content: end;
  }
}
`;

export const ListItem = styled.li`
  width: 40%;
  text-align: center;

  @media (min-width: 768px) {
    width: 21%;
    text-align: inherit;
    margin: 0rem 0.5rem;
    min-width: 6.5rem;
  }
`;
