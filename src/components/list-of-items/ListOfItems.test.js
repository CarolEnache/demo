import React from 'react';
import { render } from '@testing-library/react';

import ListOfItems from './ListOfItems';

import { mockListOfItemsProps as props } from '../../__mocks__';

describe('ListOfItems component', () => {
  it('renders', () => {
    const { getAllByTestId } = render(
      <ListOfItems filteredCategoryView={props} />
    );

    expect(getAllByTestId('item')).toHaveLength(2);
  });
});
