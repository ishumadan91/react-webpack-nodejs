const list = (state = null, action) => {
    switch(action.type) {
        case 'SET_LIST':
            return {
                ...state,
                ...action
            }
        default:
            return state;
    }
}
export default list
