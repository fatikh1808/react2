import * as types from '../constants/tools'
import callApi from "../utils/call-api";

export function fetchMyTools() {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        dispatch({
            type: types.FETCH_MY_TOOLS_REQUEST
        });

        return callApi('/chats/my', token)
            .then(data => dispatch({
                type: types.FETCH_MY_TOOLS_SUCCESS,
                payload: data,
            }))
            .catch(reason => dispatch({
                type: types.FETCH_MY_TOOLS_FAILURE,
                payload: reason,
            }))
    }
}

export function fetchAllTools() {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        dispatch({
            type: types.FETCH_ALL_TOOLS_REQUEST
        });

        return callApi('/chats', token)
            .then(data => dispatch({
                type: types.FETCH_ALL_TOOLS_SUCCESS,
                payload: data,
            }))
            .catch(reason => dispatch({
                type: types.FETCH_ALL_TOOLS_FAILURE,
                payload: reason,
            }))
    }
}

export function fetchTool(chatId) {
    return (dispatch, getState) => {
        const {token} = getState().auth;

        dispatch({
            type: types.FETCH_TOOL_REQUEST
        });

        return callApi(`/chats/${chatId}`, token)
            .then(data => {
                    dispatch({
                        type: types.FETCH_TOOL_SUCCESS,
                        payload: data,
                    });
                    return data;
                }
            )
            .catch(reason => dispatch({
                type: types.FETCH_TOOL_FAILURE,
                payload: reason,
            }))
    }
}
//
// export function setToolActive(chatId) {
//     return (dispatch) => {
//         return dispatch(fetchTool(chatId))
//             .then(data => {
//                 if (!data)
//             })
//     };
// }