import React from 'react';
import moment from 'moment';

const Transaction = (transaction, userID) => {
    return (
        <a href="#" class="list-group-item list-group-item-action list-group-item-light">
            <h5 class="mb-1">
                <span class="oi oi-person"> Người gửi:</span>
                {userID === transaction.senderID ? ' Tôi' : transaction.senderID}
            </h5>
            <div class="d-flex justify-content-between">
                <large>Số tiền: <span class="badge badge-primary badge-pill">{transaction.money} đồng</span></large>
                <large><span class="badge badge-primary badge-pill">{moment(transaction.time).fromNow()}</span></large>
            </div>
            <h5 class="mb-1">
                <span class="oi oi-person"> Người nhận:</span>
                {userID === transaction.receiverID ? ' Tôi' : transaction.receiverID}
            </h5>
        </a>
    );
};

export default Transaction;