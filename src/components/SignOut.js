import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import AuthButton from '../components/AuthButton';

const SignOut = ({isLogged, curUser, onClick}) => {
    return <div className='top-title'>
        <navbar className="bg-dark">
            <div className={'row'}>
                <div className={'col-sm-4'}>
                    <Link to='/'>
                        <h1>My block chain</h1>
                    </Link>
                </div>
                <div className={'col-sm-4'} style={{'margin': 'auto'}}>
                    <AuthButton isLogged={isLogged} curUser={curUser} onClick={onClick}/>
                </div>
            </div>
        </navbar>
    </div>
};

export default SignOut;