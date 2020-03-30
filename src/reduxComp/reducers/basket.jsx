const initialState = {
  buyTools: []
};


export function basketReducer(state = initialState, action) {
  switch (action.type) {
    case 'BUY_TOOL':
      return {...state.buyTools, buyTools: [...state.buyTools, action.payload]};


    default:
      return state
  }
}
