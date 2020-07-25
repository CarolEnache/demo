export const initialState = {
  categoryView: [],
  sectionCategory: [],
  facetView: [],
  filteredCategoryView: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SECTION_CATEGORY':
      return {
        ...state,
        sectionCategory: action.sectionCategory,
      };
    case 'SET_CATEGORY_VIEW':
      return {
        ...state,
        categoryView: action.categoryView,
      };
    case 'SET_FILTERED_CATEGORY_VIEW':
      return {
        ...state,
        filteredCategoryView: action.filteredCategoryView,
      };
    case 'SET_FACET_VIEW':
      return {
        ...state,
        facetView: action.facetView,
      };
    default:
      return state;
  }
};
