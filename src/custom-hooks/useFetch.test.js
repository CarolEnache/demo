import React from 'react';
import { render } from '@testing-library/react';
import useFetch from './useFetch';

function setup(...args) {
  const returnValue = {};
  function TestComponent() {
    Object.assign(returnValue, useFetch(...args));
    return null;
  }

  render(<TestComponent />);
  return returnValue;
}

describe('useFetch custom hook', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementationOnce();
  });

  it('fetches the data', () => {
    const url = 'http://some-url';
    setup(url, {});

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url, {});
  });
});
