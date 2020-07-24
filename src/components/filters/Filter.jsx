import React, { useContext } from 'react';

import { StateContext } from '../../App';

const Filter = () => {
  const [context, dispatchAction] = useContext(StateContext);
  const { facetView } = context;
  console.log(facetView);

  return (
    <div>
      <button
        onClick={() => dispatchAction({ type: 'ceva', altceva: 'jhkjhkjh' })}
      >
        Filters
      </button>
    </div>
  );
};

export default Filter;
