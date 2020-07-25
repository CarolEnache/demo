import React, { useContext, useState, useEffect } from 'react';

import { StateContext } from '../../App';
import { Button, FilterContainer } from './styledComponents';

import SelectedFilters from './Selected';
import ManufactureName from './ManufactureName';

const Filter = () => {
  const [context, dispatchAction] = useContext(StateContext);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState([]);
  const { facetView, categoryView } = context;

  const filteredCategoryView = categoryView.filter(
    (item) => !selected.includes(item.manufacturer)
  );

  useEffect(() => {
    dispatchAction({
      type: 'SET_FILTERED_CATEGORY_VIEW',
      filteredCategoryView: filteredCategoryView,
    });
    // eslint-disable-next-line
  }, [selected]);

  return (
    <FilterContainer>
      <Button onClick={() => setToggle(!toggle)}>
        {!toggle ? 'filters' : 'hide filters'}
      </Button>
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
