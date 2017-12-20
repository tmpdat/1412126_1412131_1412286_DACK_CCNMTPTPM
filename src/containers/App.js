import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NotFound from '../components/NotFound';
import DashBoard from '../components/DashBoard';
import Header from "../containers/Header";
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        isLogged: state.session.isLogged,
    }
};

let App = ({isLogged}) => {
    return (
        <Router>
            <div className={'Container'}>
                <Route path="/" component={Header}/>
                <div className={'main'}>
                    <Switch>
                        <Route exact path="/" render={(props) => requireAuth(props, isLogged)}/>
                        <Route path="/signup" render={(props)=> {
                            if(isLogged)
                            {
                                props.history.push('/');
                                return null;
                            }
                            return <div><SignUp/></div>;
                        }}/>
                        <Route path="/signin" render={(props)=> {
                            if(isLogged)
                            {
                                props.history.push('/');
                                return null;
                            }
                            return <div><SignIn/></div>;
                        }}/>
                        <Route path="/" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );

    function requireAuth(props, isLogged)
    {
        if (!isLogged) {
            props.history.push('/signin');
            return <SignIn history={props.history}/>;
        }
        else
        {
            return (<DashBoard/>);
        }
    }
};

App = connect(mapStateToProps)(App);

export default App;