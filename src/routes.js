import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Login';
import ForgetPass from './pages/ForgetPass';
import LoginSuccess from './pages/LoginSuccess';
import Cadastro from './pages/Cadastro';
import TrocaSenha from './pages/TrocaSenha';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/forgetpass" component={ForgetPass} />
            <Route path="/loginsuccess" component={LoginSuccess} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/trocarSenha" component={TrocaSenha} />
        </Switch>
    </BrowserRouter>
)

export default Routes;