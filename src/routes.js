import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import LoginSuccess from './pages/LoginSuccess';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/forgetpass" component={ForgetPass} />
            <Route path="/loginsuccess" component={LoginSuccess} />
        </Switch>
    </BrowserRouter>
)

export default Routes;