import React from 'react';
import { List, ListItem, ListHeader } from './styledComponents';

const SelectedFilters = ({ selected, setSelected }) => {
  return (
    <>
      <ListHeader>Selected filters</ListHeader>
      <List>
        {selected.map((selection, index) => (
          <ListItem
            key={index}
            data-testid='selected-filters'
            onClick={() => setSelected(selected.filter((s) => s !== selection))}
          >
            {selection} <span>x</span>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SelectedFilters;
