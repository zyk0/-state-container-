const initialState = {
  items: null,
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WINES':
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    default:
  }
  return state;
};
