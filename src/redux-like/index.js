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
        test: 'hello world',
      };
    default:
      return state;
  }
};
