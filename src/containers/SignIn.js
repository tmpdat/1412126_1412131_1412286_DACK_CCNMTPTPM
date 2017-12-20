import React from 'react';
import { connect } from 'react-redux';
import {confirmSigIn} from "../actions";
import {
    Link,
} from 'react-router-dom';

const mapStateToProps = (state) => (
    {
        isLogged: state.session.isLogged,
        curUser: state.session.curUser,
    }
);

let SignIn = ({dispatch, curUser}) => {
    let email;
    let password;
    return(
        <div className='form-group sign-in'>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(confirmSigIn(email.value, password.value));
            }}>
                <div className='form-group'>
                    <div className='form-group'>
                        <h3>Sign in</h3>
                    </div>
                    <div className=''>
                        <Link to='/signup'>Sign up</Link>
                    </div>
                </div>
                <div className={'form-group'}>
                    <label>Email</label>
                    <div>
                        <input className={'form-control'} value={curUser.email} ref={node =>{
                            email = node;
                        }}></input>
                    </div>
                </div>
                <div className={'form-group'}>
                    <label>Mật khẩu</label>
                    <div>
                        <input className={'form-control'} type="password" ref={node => {
                            password = node;
                        }}></input>
                    </div>
                </div>
                <div className={'form-group'}>
                    <button className='btn btn-sm btn-secondary button-signin' type='submit'>Đăng nhập</button>
                </div>
            </form>
        </div>
    )
};

SignIn = connect(mapStateToProps)(SignIn);

export default SignIn;