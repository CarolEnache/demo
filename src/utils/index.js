const hardcodedId = '10023';
const regex = /:5443/gi;

export const GetSectionCategory = (
  { BreadCrumbTrailEntryView = [] },
  dispatchAction
) => {
  const sectionCategory = BreadCrumbTrailEntryView.map(
    (category) => category.value === hardcodedId && category.label
  )
    .filter((f) => f !== false)
    .join();

  dispatchAction({ type: 'SET_SECTION_CATEGORY', sectionCategory });
};

export const GetFacetView = ({ FacetView = [] }, dispatchAction) => {
  const facetView = FacetView.map(({ Entry, name }) => {
    let facet = null;
    if (name === 'ManufacturerName') {
      facet = Entry.map(({ label, count }) => {
        return { label, count };
      });
      return facet;
    }
    return facet;
  }).filter((f) => f !== null)[0];

  return dispatchAction({ type: 'SET_FACET_VIEW', facetView });
};

export const GetRestructuredCategoryView = (
  { CatalogEntryView = [] },
  dispatchAction
) => {
  const restructuredCategoryView = Promise.all(
    CatalogEntryView.map(async (entry) => {
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
};
