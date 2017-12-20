import { combineReducers } from 'redux';
import session from './session';
import allTransactions from './allTransactions';
import recentTransactions from './recentTransactions';

const blockChainApp = combineReducers({
    session,
    recentTransactions,
    allTransactions,
});

export default blockChainApp;