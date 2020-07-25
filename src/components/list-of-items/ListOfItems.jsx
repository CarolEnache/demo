import React from 'react';
import { ImagePlaceholder } from '../placeholders';

import { List, ListItem } from './styledComponents';

const ListOfItems = ({ filteredCategoryView = [] }) => {
  return (
    <List>
      {filteredCategoryView.map(({ Price, name }, index) => {
        return (
          <ListItem key={index}>
            <ImagePlaceholder />
            {name} <span>${Price[0].priceValue}</span>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListOfItems;
