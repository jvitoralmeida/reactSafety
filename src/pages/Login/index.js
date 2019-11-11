import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleLogin.css';
import logo from './img/login.png';
import { Link } from 'react-router-dom';

import api from '../../services/api';

//Components Bootstrap
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            login: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    verifyLogin = async () => {
        const { username, password } = this.state;

        await api.post('/user', {
            username,
            password
        })
            .then(success => {
                console.log("login certo")
                this.props.history.push({
                    pathname: '/loginsuccess',
                    state: {
                        resultado: success.data
                    }
                })
            })
            .catch(error => {
                this.setState({login: false})
            })
    }

    render() {

        return (
            <div className="div-login">
                <img src={logo} className="logo" alt="Imagem de login" />
                <Form className="formulario" onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} className="form-user">
                        <Form.Label column sm="1" className="item" >
                            Username
                        </Form.Label>
                        <Col sm="5">
                            <Form.Control type="text" name="username" className="item" onChange={this.handleInputChange} placeholder="Digite seu usuário"></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-senha">
                        <Form.Label column sm="1" className="item">
                            Senha
                    </Form.Label>
                        <Col sm="5">
                            <Form.Control type="password" name="password" className="item" onChange={this.handleInputChange} placeholder="Digite sua senha"></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="btns">
                        <Button variant="primary" size="lg" className="itemBtn" onClick={this.verifyLogin}><Link to="">Entrar</Link></Button>
                        <Button variant="primary" size="lg" className="itemBtn"><Link to="forgetpass">Esqueci minha senha</Link></Button>
                    </Form.Group>
                </Form>
                <div>{!this.state.login ? <div className="valida-login"><h3>Login ou senha inválido</h3></div> : null}</div>
            </div>
        )
    }
}

export default Login;