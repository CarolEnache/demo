import React, { useContext, useState, useEffect } from 'react';

import { StateContext } from '../../App';
import { Button, FilterContainer } from './styledComponents';

import SelectedFilters from './Selected';
import ManufactureName from './ManufactureName';

const Filter = () => {
  const [context, dispatchAction] = useContext(StateContext);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState([]);
  const [hide, setHide] = useState(false);
  const { facetView, categoryView } = context;

  const filteredCategoryView = categoryView.filter(
    (item) => !selected.includes(item.manufacturer)
  );

  const reportWindowSize = () => {
    const smallScreen = window.innerWidth < 668;
    setHide(!smallScreen);
    !smallScreen && setToggle(!smallScreen);
  };

  const resizeListener = window.addEventListener('resize', reportWindowSize);

  useEffect(() => {
    reportWindowSize();
    dispatchAction({
      type: 'SET_FILTERED_CATEGORY_VIEW',
      filteredCategoryView: filteredCategoryView,
    });
    // eslint-disable-next-line
  }, [selected, resizeListener]);

  return (
    <FilterContainer>
      {!hide && (
        <Button onClick={() => setToggle(!toggle)}>
          {!toggle ? 'filters' : 'hide filters'}
        </Button>
      )}
      {toggle && (
        <>
          <SelectedFilters selected={selected} setSelected={setSelected} />
          <ManufactureName
            facetView={facetView}
            selected={selected}
            setSelected={setSelected}
          />
        </>
      )}
    </FilterContainer>
  );
};

export default Filter;
