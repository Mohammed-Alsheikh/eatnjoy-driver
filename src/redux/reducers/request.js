const initialState = {
  data: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_REQUEST':
      return {data: action.payload};
    default:
      return state;
  }
}
