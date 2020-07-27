import React, { createContext, useReducer, useMemo } from 'react';

import { initialState, reducer } from './state-management';
import { ProductView } from './layouts';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cachedState = useMemo(() => [state, dispatch], [state]);
  return (
    <StateContext.Provider value={cachedState}>
      <div data-testid={'application'}>
        <ProductView />
      </div>
    </StateContext.Provider>
  );
}

export const StateContext = createContext(initialState);

export default App;
