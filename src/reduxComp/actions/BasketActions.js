export const DELETE_TOOL = 'DELETE_TOOL';

export function deleteTool(tool) {
    return {
        type: DELETE_TOOL,
        payload: {id: tool.id},
    }
}
