import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import SelectedFilters from './Selected';

import { mockSelectedFiltersProps as props } from '../../__mocks__';

describe('SelectedFilters component', () => {
  it('renders', () => {
    const { selected, setSelected } = props;

    const { queryByTestId } = render(
      <SelectedFilters selected={selected} setSelected={setSelected} />
    );

    const selectedItem = queryByTestId('selected-filters');

    expect(selectedItem).toBeInTheDocument();
    fireEvent.click(selectedItem);
    expect(setSelected).toHaveBeenCalled();
    waitForElementToBeRemoved(() =>
      screen.getByText('Example tablet manufacture name one')
    );
  });
});
