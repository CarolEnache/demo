import React, { useEffect, useContext } from 'react';

import { useFetch } from '../custom-hooks';
import { StateContext } from '../App';

import { ImagePlaceholder } from '../components/placeholders';

import { Container } from './styledLayouts';
import { BreadCrumbs } from '../components/bread-crumbs';
import { Filter } from '../components/filters';

const ProductView = () => {
  const hardcodedId = '10023';
  const [context, dispatchAction] = useContext(StateContext);
  const { categoryView, filteredCategoryView } = context;

  console.log(categoryView, filteredCategoryView);
  const regex = /:5443/gi;

  const { response } = useFetch(
    `https://demo01-live-api.salmon90.com./wcs/resources/store/1/productview/byCategory/${hardcodedId}`,
    {}
  );

  useEffect(() => {
    if (!!response) {
      const sectionCategory = response.BreadCrumbTrailEntryView.map(
        (category) => category.value === hardcodedId && category.label
      )
        .filter((f) => f !== false)
        .join();

      dispatchAction({ type: 'SET_SECTION_CATEGORY', sectionCategory });

      const facetView = response.FacetView.map(({ Entry, name }) => {
        let facet = null;
        if (name === 'ManufacturerName') {
          facet = Entry.map(({ label, count }) => {
            return { label, count };
          });
          return facet;
        }
        return facet;
      }).filter((f) => f !== null)[0];

      dispatchAction({ type: 'SET_FACET_VIEW', facetView });

      const restructuredCategoryView = Promise.all(
        response.CatalogEntryView.map(async (entry) => {
          const correctUrl = entry.resourceId.replace(regex, '.');

          try {
            const res = await fetch(correctUrl);
            const json = await res.json();
            const completeItemInformation = json.CatalogEntryView;

            return completeItemInformation[0];
          } catch (error) {
            console.error(error);
          }
        })
      );
      restructuredCategoryView.then((categoryView) => {
        dispatchAction({ type: 'SET_CATEGORY_VIEW', categoryView });
        return dispatchAction({
          type: 'SET_FILTERED_CATEGORY_VIEW',
          filteredCategoryView: categoryView,
        });
      });
    }
  }, [response]);

  return (
    <Container>
      <BreadCrumbs props={context} />
      <Filter />
      <ul>
        {filteredCategoryView.map(({ Price, name }, index) => {
          return (
            <li key={index}>
              <ImagePlaceholder />
              {name} <br />${Price[0].priceValue}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ProductView;
