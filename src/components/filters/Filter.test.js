import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Filter } from './';
import { StateContext } from '../../App';

afterEach(cleanup);

describe('Filter component', () => {
  let dispatchMock;
  const contextMock = [
    {
      categoryView: [],
      sectionCategory: [],
      facetView: [
        {
          label: 'Adelee Plus',
          count: '2',
        },
      ],
      filteredCategoryView: [],
    },
    (dispatchMock = jest.fn()),
  ];
  const { getByText, getByTestId, queryByTestId } = render(
    <StateContext.Provider value={contextMock}>
      <Filter />
    </StateContext.Provider>
  );

  it('displays the selected item when clicking on the name of the manufacturer', () => {
    const selectableItem = getByTestId('manufacture-name');

    expect(getByText('Selected filters')).toBeInTheDocument();
    expect(getByText('Manufacture name')).toBeInTheDocument();
    expect(selectableItem).toBeInTheDocument();
    expect(queryByTestId('selected-filters')).not.toBeInTheDocument();

    fireEvent.click(selectableItem);
    expect(queryByTestId('selected-filters')).toBeInTheDocument();
  });
});
