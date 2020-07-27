import React from 'react';
import { render } from '@testing-library/react';

import ManufactureName from './ManufactureName';

import { mockedManufactureNameProps as props } from '../../__mocks__';

describe('ManufactureName component', () => {
  it('renders', () => {
    const { facetView, selected, setSelected } = props;

    const { getByText } = render(
      <ManufactureName
        facetView={facetView}
        selected={selected}
        setSelected={setSelected}
      />
    );

    expect(getByText('Manufacture name')).toBeInTheDocument();
    expect(getByText('Example tablet manufacture name')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
  });
});
