const reducer = (state = [], action) => {
    if (action.type === 'genNewArray') {
        return action.payload;
    } else {
        return state;
    }
}

export default reducer;