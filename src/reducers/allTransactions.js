const allTransactions = (state = {
    allTransactions: null,
}, action) => {
    switch (action.type)
    {
        case 'SET_TO_ALL_TRANSACTIONS':
            return Object.assign({}, state, {
                allTransactions: action.transactions,
            });
        case 'ADD_TO_ALL_TRANSACTION':
            return Object.assign({}, state, {
                allTransactions: [action.transaction, ...state.allTransactions],
            });
        default:
            return state;
    }
};

export default allTransactions;