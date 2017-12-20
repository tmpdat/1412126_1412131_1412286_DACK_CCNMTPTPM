import React from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import validator from 'validator';

const required = (value) => {
    if (!value.toString().trim().length) {
        return <span className="badge badge-danger">Cần thiết</span>
    }
};

const isValid = (value) => {
    if (!validator.isNumeric(value) || value <= 0) {
        return <span className="badge badge-danger">Số tiền không hợp lệ.</span>
    }
};

const YourWallet = ({curUser, sendMoney}) => {
    const itMe = (value) => {
        if (value === curUser.ID) {
            return <span className="badge badge-danger">Không thể gửi cho chính mình.</span>
        }
    };

    const enoughMoney = (value) => {
        if (value > parseInt(curUser.balance)) {
            return <span className="badge badge-danger">Tiền trong ví không đủ.</span>
        }
    };

    return (
        <div>
            <div>
                <nav className='navbar navbar-light bg-light title-home'>
                    <div>
                        <h1>Your balance</h1>
                        <h4>
                            {curUser.balance} đồng
                        </h4>
                    </div>
                </nav>
            </div>
            <div>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    sendMoney(document.getElementById('txtMoney').value, document.getElementById('txtDestination').value);
                }}>
                    <div className='form-group' style={{'margin-left': '20px'}}>
                        <Input validations={[required, itMe]} className={'form-control'} id={'txtDestination'} placeholder={'id người nhận'}/>
                    </div>
                    <div className='form-group' style={{'margin-left': '20px'}}>
                        <Input validations={[required, enoughMoney, isValid]} className={'form-control'} id={'txtMoney'} placeholder='Số tiền gửi'/>
                    </div>
                    <div className='row' style={{'margin-left': '20px'}}>
                        <Button className="btn btn-outline-dark btn-sm" type='submit'>Gửi</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default YourWallet;