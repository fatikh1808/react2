export const ADD_TOOL = 'ADD_TOOL';

export function setTool(tool) {
  return {
    type: ADD_TOOL,
    payload: tool,
  }
}
