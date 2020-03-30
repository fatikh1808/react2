import data from '../components/Tools'

const initialState = {
  tools: data,
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TOOL':
      return {...state.tools, tools: [...state.tools, action.payload]};

    default:
      return state
  }
}
