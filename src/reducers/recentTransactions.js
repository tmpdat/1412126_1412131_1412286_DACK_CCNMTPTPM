const recentTransactions = (state = {
    recentTransactions: null,
}, action) => {
    switch (action.type)
    {
        case 'SET_TO_RECENT_TRANSACTIONS':
            return Object.assign({}, state, {
                recentTransactions: action.transactions,
            });
        case 'ADD_TO_RECENT_TRANSACTION':
            return Object.assign({}, state, {
                recentTransactions: [action.transaction, ...state.recentTransactions],
            });
        default:
            return state;
    }
};

export default recentTransactions;