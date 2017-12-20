const session = (state = {
    isLogged: false,
    curUser: {
        ID: null,
        email: null,
        balance: 0,
    }
}, action) => {
    switch (action.type)
    {
        case 'SIGN_IN':
            return Object.assign({}, state, {
                isLogged: action.isLogged,
                curUser: action.curUser,
            });
        case 'SIGN_OUT':
            return Object.assign({}, state, {
                isLogged: false,
                curUser: {
                    ID: null,
                    email: null,
                    balance: 0,
                },
            });
        case 'UPDATE_BALANCE':
            return Object.assign({}, state, {
                curUser: Object.assign({}, state.curUser, {
                    balance: state.curUser.balance - action.money,
                })
            });
        default:
            return state;
    }
};

export default session;