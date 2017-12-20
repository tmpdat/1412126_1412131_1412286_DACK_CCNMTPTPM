import axios from 'axios';

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    };
};

const signIn = (isLogged, curUser) => {
    return {
        type: 'SIGN_IN',
        isLogged,
        curUser
    }
};

export function confirmSigIn(email, password)
{
    return dispatch => {
        var data = {
            email: email,
            password: password
        };
        var url = 'https://blockchainserver.herokuapp.com/api/account/signin';
        return axios({
            url: url,
            method: 'POST',
            data: data,
        })
        .then(function (res) {
            if(!res.data)
            {
                alert(res.status);
                return;
            }
            if (res.data.status == 1) {
                return dispatch(signIn(true, {
                    ID: res.data.userID,
                    email: data.email,
                    balance: res.data.balance,
                }));
            }
            else
            {
                alert(res.data.msg);
            }
        })
        .catch (function (err) {
            alert('Lỗi server');
            console.log(err);
        });
    };
};

export function signUp(email, password, confirmPassword)
{
    return dispatch => {
        var data = {
            email: email,
            password: password,
        };
        if(password !== confirmPassword)
        {
            alert('Mật khẩu nhập lại không khớp.');
            return;
        }
        var url = 'https://blockchainserver.herokuapp.com/api/account/register';
        return axios({
            url: url,
            method: 'POST',
            data: data,
        })
            .then(function (res) {
                if(!res.data)
                {
                    alert(res.status);
                    return;
                }
                if (res.data.status == 1) {
                    return dispatch(confirmSigIn(email, password));
                }
                else
                {
                    alert(res.data.msg);
                }
            })
            .catch (function (err) {
                alert('Lỗi server');
                console.log(err);
            });
    };
};

export const setRecentTransactions = (transactions) => {
    return {
        type: 'SET_TO_RECENT_TRANSACTIONS',
        transactions
    }
};

export const addToRecentTransactions = (transaction) => {
    return {
        type: 'ADD_TO_RECENT_TRANSACTION',
        transaction
    }
};

export const addToAllTransactions = (transaction) => {
    return {
        type: 'ADD_TO_ALL_TRANSACTION',
        transaction
    }
};

const updateBalance = (money) => {
    return {
        type: 'UPDATE_BALANCE',
        money
    }
};

export const setAllTransactions = (transactions) => {
    return {
        type: 'SET_TO_ALL_TRANSACTIONS',
        transactions
    }
};

export function getRecentTransactions()
{
    return (dispatch, getState) => {
        var url = 'https://blockchainserver.herokuapp.com/api/transaction/recentTransactions/' + getState().session.curUser.ID;;
        return axios({
            url: url,
            method: 'GET',
        })
            .then(function (res) {
                if(!res.data || !res.data.result)
                {
                    console.log('Không có giao dịch nào gần đây.');
                    return dispatch(setRecentTransactions(null));
                }
                return dispatch(setRecentTransactions(res.data.result));
            })
            .catch (function (err) {
                alert('Lỗi server');
                console.log(err);
            });
    };
};

export function getAllTransactions()
{
    return (dispatch) => {
        var url = 'https://blockchainserver.herokuapp.com/api/transaction/allTransactions';
        return axios({
            url: url,
            method: 'GET',
        })
            .then(function (res) {
                if(!res.data || !res.data.result)
                {
                    console.log('Không có giao dịch nào.');
                    return dispatch(setAllTransactions(null));
                }
                return dispatch(setAllTransactions(res.data.result));
            })
            .catch (function (err) {
                alert('Lỗi server');
                console.log(err);
            });
    };
};

export function sendMoney(money, receiverID)
{
    return (dispatch, getState) => {
        const data = {
            receiverID: receiverID,
            money: money,
            senderID: getState().session.curUser.ID,
        }
        var url = 'https://blockchainserver.herokuapp.com/api/transaction';
        return axios({
            url: url,
            method: 'POST',
            data: data,
        })
            .then(function (res) {
                if(!res.data)
                {
                    console.log('Gửi tiền thất bại');
                    return;
                }
                if (res.data.status == 1) {
                    dispatch(addToAllTransactions(res.data.transaction));
                    dispatch(updateBalance(res.data.transaction.money));
                    return dispatch(addToRecentTransactions(res.data.transaction));
                }
            })
            .catch (function (err) {
                alert('Lỗi server');
                console.log(err);
            });
    };
};