import React, { useEffect, useState, useContext, useReducer } from 'react';

import { StateContext } from '../../App';

const Filter = () => {
  const [context, dispatchAction] = useContext(StateContext);

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
