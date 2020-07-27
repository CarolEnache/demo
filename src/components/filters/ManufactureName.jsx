import React from 'react';
import { List, ListItem, ListHeader } from './styledComponents';

const ManufactureName = ({ facetView = [], selected, setSelected }) => {
  return (
    <>
      <ListHeader>Manufacture name</ListHeader>
      <List>
        {facetView.map(({ label, count }, index) => (
          <ListItem
            key={index}
            data-testid='manufacture-name'
            onClick={() =>
              !selected.includes(label) && setSelected([...selected, label])
            }
          >
            {label} <span>{count}</span>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ManufactureName;
