import React from 'react';
import { connect } from 'react-redux';
import {sendMoney} from "../actions";
import YourWallet from "../components/YourWallet";

const mapStateToProps = (state) => {
    return {
        curUser: state.session.curUser,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMoney: (money, receiverID) => {
            dispatch(sendMoney(money, receiverID));
        }
    }
};

const UserWallet = connect(
    mapStateToProps,
    mapDispatchToProps
)(YourWallet);

export default UserWallet;