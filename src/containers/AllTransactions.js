import React from 'react';
import { connect } from 'react-redux';
import {getAllTransactions} from "../actions";
import VisibleAllTransactions from "../components/VisibleAllTransactions";

const mapStateToProps = (state) => {
    return {
        transactions: state.allTransactions,
        title: 'Tất cả giao dịch',
        userID: state.session.curUser.ID,
    }
};

const mapDispatchToProps = (dispatch) => {
    dispatch(getAllTransactions());
    return {
    };
};

const AllTransactions = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleAllTransactions);

export default AllTransactions;