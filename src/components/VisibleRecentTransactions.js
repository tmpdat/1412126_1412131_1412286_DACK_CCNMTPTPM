import React from 'react';
import Transaction from './Transaction';

const VisibleTransactions = ({transactions, title, userID}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className={'recent-transactions'}>
                <div class="list-group">
                    {transactions.recentTransactions != null ? transactions.recentTransactions.map(item => Transaction(item, userID)) : 'Không có giao dịch nào.'}
                </div>
            </div>
        </div>
    );
};

export default VisibleTransactions;