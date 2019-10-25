import React from 'react';
import './stylePass.css';
import api from '../../services/api';

//Bootstrap Components
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class ForgetPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            click: false,
            enviou: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }



    verifyUsername = async () => {
        const { username } = this.state;

        await api.post('/senhaEmail', {
            username
        })
            .then(success => {
                this.setState({enviou: true})
                this.setState({click: true})
            })
            .catch(error => {
                this.setState({enviou: false})
                this.setState({click: true})
            })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {

        const { enviou, click} = this.state;

        let retornaDiv = () => {
            if(click && enviou){
                return <div className="item-sucesso"><h5>E-mail enviado</h5></div>
            }
            if(click && !enviou){
                return <div className="item-erro"><h5>Usuário não existe ou não há e-mail cadastrado</h5></div>
            }
        }

        return (
            <div className="box">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm="1" >
                            Username
                </Form.Label>
                        <Col sm="3">
                            <Form.Control type="email" name="username" placeholder="Digite seu usuário" onChange={this.handleInputChange}></Form.Control>
                        </Col>
                    </Form.Group>
                    <Button onClick={this.verifyUsername}>Recuperar minha senha</Button>
                </Form>
                <div className="valida-email">{retornaDiv()}</div>
            </div>
        )
    }
}

export default ForgetPass;