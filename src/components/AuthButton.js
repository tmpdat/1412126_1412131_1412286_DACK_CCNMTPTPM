import React from 'react';
import {
    withRouter,
} from 'react-router-dom';

const AuthButton = withRouter((props) => {
    if(props.isLogged)
        return(
            <p>
                {props.curUser.ID}
                <button className={'btn btn-outline-secondary btn-sm sign-out'} onClick={() => {
                    props.onClick();
                    // window.sessionStorage.clear();
                    // self.setState({
                    //     isLogged: false,
                    //     balance: null,
                    //     email: null,
                    //     userID: null,
                    //     recentTransactions: null,
                    //     allTransactions: null,
                    // });
                    //history.push('/signin');
                }}>
                    Sign out
                    <span class="oi oi-account-login"></span>
                </button>
            </p>
        );
    return null;
});

export default AuthButton;