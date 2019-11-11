import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import api from '../../services/api';


import './styleTrocaSenha.css';

class TrocaSenha extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            token: null,
            senha: null,
            confirmacao: null,
            trocou: null,
            click: null
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

    trocaSenha = async () => {
        const { token, senha } = this.state;

        await api.post('/trocaSenha', {
            token,
            senha
        })
            .then(success => {
                this.setState({trocou: true})
                this.setState({click: true})
            })
            .catch(error => {
                this.setState({trocou: false})
                this.setState({click: true})
            })
    }

    render() {
        return (
           <div className="div-form">
                <Form className="formulario" onSubmit={this.handleSubmit}>
                <Form.Group as={Row} className="form-token">
                        <Form.Label column sm="3" className="item" >
                            Token
                        </Form.Label>
                        <Col sm="5">
                            <Form.Control maxLength="4" minLength="4" type="text" name="token" className="item" onChange={this.handleInputChange} placeholder="Digite seu Token"></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-novaSenha">
                        <Form.Label column sm="3" className="item">
                            Nova Senha
                        </Form.Label>
                        <Col sm="5">
                            <Form.Control type="password" name="senha" className="item" onChange={this.handleInputChange} placeholder="Digite a nova senha"></Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-confirmaSenha">
                        <Form.Label column sm="3" className="item">
                            Confirme a Senha
                    </Form.Label>
                        <Col sm="5">
                            <Form.Control type="password" name="confirmacao" className="item" onChange={this.handleInputChange} placeholder="Confirme a senha"></Form.Control>
                        </Col>
                    </Form.Group>
                    <Button variant="outline-primary" onClick={this.trocaSenha}>Trocar Senha</Button>
                    <div className="valida-email">{console.log("valida-email")}</div>
                </Form>
           </div>
        );
    }
}

export default TrocaSenha;