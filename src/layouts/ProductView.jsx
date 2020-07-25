import React, { useEffect, useContext } from 'react';

import { useFetch } from '../custom-hooks';
import {
  GetSectionCategory,
  GetFacetView,
  GetRestructuredCategoryView,
} from '../utils';
import { StateContext } from '../App';

import { BreadCrumbs } from '../components/bread-crumbs';
import { Filter } from '../components/filters';
import { ListOfItems } from '../components/list-of-items';

import { Container, Wrapper } from './styledLayouts';

const hardcodedId = '10023';

const ProductView = () => {
  const [context, dispatchAction] = useContext(StateContext);
  const { filteredCategoryView } = context;

  const { response } = useFetch(
    `https://demo01-live-api.salmon90.com./wcs/resources/store/1/productview/byCategory/${hardcodedId}`,
    {}
  );

  useEffect(() => {
    if (!!response) {
      const {
        BreadCrumbTrailEntryView,
        CatalogEntryView,
        FacetView,
      } = response;

      GetSectionCategory({ BreadCrumbTrailEntryView }, dispatchAction);
      GetFacetView({ FacetView }, dispatchAction);
      GetRestructuredCategoryView({ CatalogEntryView }, dispatchAction);
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <Container>
      <BreadCrumbs props={context} />
      <Wrapper>
        <Filter />
        <ListOfItems filteredCategoryView={filteredCategoryView} />
      </Wrapper>
    </Container>
  );
};

export default ProductView;
