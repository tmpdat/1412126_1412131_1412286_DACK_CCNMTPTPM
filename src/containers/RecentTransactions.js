import React from 'react';
import { connect } from 'react-redux';
import {getRecentTransactions} from "../actions";
import VisibleRecentTransactions from "../components/VisibleRecentTransactions";

const mapStateToProps = (state) => {
    return {
        transactions: state.recentTransactions,
        title: 'Giao dịch gần đây',
        userID: state.session.curUser.ID,
    }
};

const mapDispatchToProps = (dispatch) => {
    dispatch(getRecentTransactions());
    return {
    };
};

const RecentTransactions = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleRecentTransactions);

export default RecentTransactions;