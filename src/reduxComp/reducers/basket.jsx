const initialState = {
    buyTools: []
};


export function basketReducer(state = initialState, action) {
    switch (action.type) {
        case 'BUY_TOOL':
            return {...state.buyTools, buyTools: [...state.buyTools, action.payload]};

        case 'DELETE_TOOL': {
            let toolId = action.payload.id;

            let newTools = state.buyTools.filter(function (action) {
                return action.id !== toolId;
            });
            return {buyTools: newTools}
        }

        default:
            return state
    }

}
