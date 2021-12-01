export const getNewArray = (array) => {
    return (dispatch) => {
        dispatch({
            type: 'genNewArray',
            payload: array
        })
    }
}