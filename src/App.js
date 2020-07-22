import React, { useEffect, useState, createContext, useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './redux-like';

import ImagePlaceholder from './ImagePlaceholder';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);

        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};

function App() {
  const [categoryView, setCategoryView] = useState([]);
  const [sectionCategory, setSectionCategory] = useState();
  const hardcodedId = '10023';
  const [state, dispatch] = useReducer(reducer, initialState);

  const { response } = useFetch(
    `https://demo01-live-api.salmon90.com./wcs/resources/store/1/productview/byCategory/${hardcodedId}`,
    {}
  );

  const regex = /:5443/gi;

  useEffect(() => {
    if (!!response) {
      const sectionCategory = response.BreadCrumbTrailEntryView.map(
        (category) => category.value === hardcodedId && category.label
      )
        .filter((f) => f !== false)
        .join();

      setSectionCategory(sectionCategory);

      const restructuredCategoryView = Promise.all(
        response.CatalogEntryView.map(async (entry) => {
          const correctUrl = entry.resourceId.replace(regex, '.');

          try {
            const res = await fetch(correctUrl);
            const json = await res.json();
            const manufacturerName = json.CatalogEntryView[0].manufacturer;

            return {
              ...entry,
              manufacturerName,
            };
          } catch (error) {
            console.error(error);
          }
        })
      );
      restructuredCategoryView.then((data) => setCategoryView(data));
    }
  }, [response]);

  console.log(state);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <h3>{sectionCategory}</h3>
        <p>{categoryView.length} items</p>
        <div>
          <button onClick={() => dispatch({ type: 'ceva' })}>Filters</button>
        </div>
        <ul>
          {categoryView.map(({ Price, name }, index) => {
            return (
              <li key={index}>
                <ImagePlaceholder />
                {name} <br />${Price[0].priceValue}
              </li>
            );
          })}
        </ul>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const StateContext = createContext(initialState);
export const DispatchContext = createContext();

export default App;
