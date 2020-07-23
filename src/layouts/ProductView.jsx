import React, { useEffect, useReducer, useContext } from 'react';

import { useFetch } from '../custom-hooks';
import { StateContext } from '../App';

import { ImagePlaceholder } from '../components/placeholders';

import { Container } from './styledLayouts';
import { BreadCrumbs } from '../components/bread-crumbs';
import { Filter } from '../components/filters';

const ProductView = () => {
  const hardcodedId = '10023';
  const [context, dispatchAction] = useContext(StateContext);

  const regex = /:5443/gi;

  const { response } = useFetch(
    `https://demo01-live-api.salmon90.com./wcs/resources/store/1/productview/byCategory/${hardcodedId}`,
    {}
  );

  useEffect(() => {
    if (!!response) {
      console.log(response);
      const sectionCategory = response.BreadCrumbTrailEntryView.map(
        (category) => category.value === hardcodedId && category.label
      )
        .filter((f) => f !== false)
        .join();

      dispatchAction({ type: 'SET_SECTION_CATEGORY', sectionCategory });

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
      restructuredCategoryView.then((categoryView) =>
        dispatchAction({ type: 'SET_CATEGORY_VIEW', categoryView })
      );
    }
  }, [response]);

  console.log(context);

  return (
    <Container>
      <BreadCrumbs props={context} />
      <Filter />
      <ul>
        {context.categoryView.map(({ Price, name }, index) => {
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
