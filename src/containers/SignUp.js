import { connect } from 'react-redux';
import {signUp} from "../actions";
import {
    Link
} from 'react-router-dom';
import React from 'react';
import App from './App';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import validator from 'validator';

const required = (value) => {
    if (!value.toString().trim().length) {
        return <span className="badge badge-danger">Cần thiết</span>
    }
};

const Email = (value) => {
    if (!validator.isEmail(value)) {
        return <span className="badge badge-danger">"{value}" không phải email hợp lệ.</span>
    }
};

const mt = (value) => {
    if (!validator.isLength(value, {min:4})) {
        return <span className="badge badge-danger">Mật khẩu phải có ít nhất 4 ký tự.</span>
    }
};

let SignUp = ({dispatch}) => {
        const correctConfirmPassword = (value) => {
        if (value !== document.getElementById('txtPassword').value) {
            return <span className="badge badge-danger">Nhập lại password không khớp.</span>
        }
    };
    return (
        <div className='form-group sign-up'>
            <Form onSubmit={(e) => {
                e.preventDefault();
                const confirmPassword = document.getElementById('txtConfirmPassword').value;
                const password = document.getElementById('txtPassword').value;
                const email = document.getElementById('txtEmail').value;
                dispatch(signUp(email, password, confirmPassword));
            }}>
                <div className={'form-group'}>
                    <div>
                        <h3>Sign up</h3>
                    </div>
                    <div className=''>
                        <Link to='/signin'>Sign in</Link>
                    </div>
                </div>
                <div className={'form-group'}>
                    <label>Email</label>
                    <div>
                        <Input className={'form-control'} type='Email' validations={[required, Email]} id='txtEmail'></Input>
                    </div>
                </div>
                <div className={'form-group'}>
                    <label>Mật khẩu</label>
                    <div>
                        <Input className={'form-control'} type="password" validations={[required, mt]} id='txtPassword'></Input>
                    </div>
                    <div>
                    </div>
                </div>
                <div className={'form-group'}>
                    <label>Nhập lại mật khẩu</label>
                    <div>
                        <Input className={'form-control'} type="password" validations={[correctConfirmPassword]} id='txtConfirmPassword'></Input>
                    </div>
                </div>
                <div className={'form-group'}>
                    <Button type='submit' className='btn btn-sm btn-secondary button-register'>Đăng ký</Button>
                </div>
            </Form>
        </div>
    );
};

SignUp = connect()(SignUp);

export default SignUp;