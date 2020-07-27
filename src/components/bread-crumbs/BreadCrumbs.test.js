import React from 'react';
import { render } from '@testing-library/react';

import { BreadCrumbs } from './';

import { mockedBreadcrumbsProps as props } from '../../__mocks__';

describe('BreadCrumbs component', () => {
  it('renders', () => {
    const { getByText } = render(<BreadCrumbs props={props} />);

    expect(getByText('hello')).toBeInTheDocument();
    expect(getByText('4 items')).toBeInTheDocument();
  });
});
