import React from 'react';
import { connect } from 'react-redux';
import {signOut, setAllTransactions, setRecentTransactions} from "../actions";
import SignOut from '../components/SignOut';

const mapStateToProps = (state) => {
    return {
        isLogged: state.session.isLogged,
        curUser: state.session.curUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(setRecentTransactions(null));
            dispatch(setAllTransactions(null));
            dispatch(signOut());
        }
    }
};

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignOut);

export default Header;