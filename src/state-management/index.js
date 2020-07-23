export const initialState = {
  categoryView: [],
  sectionCategory: [],
  test: '',
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
    case 'ceva':
      console.log(action.altceva);
      return {
        ...state,
        test: action.altceva,
      };
    default:
      return state;
  }
};
