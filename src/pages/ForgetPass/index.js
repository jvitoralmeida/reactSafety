import React from 'react';
import './stylePass.css';

//Bootstrap Components
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const ForgetPass = () => (
    <Container className="container">
        <Form id="form-login">
            <Form.Group as={Row} id="group-user">
                <Form.Label column sm="1">
                    Username
                </Form.Label>
                <Col sm="5">
                    <Form.Control type="text" placeholder="Digite seu usuário"></Form.Control>
                </Col>
            </Form.Group>
            <Button>Recuperar minha senha</Button>
        </Form>
    </Container>
);

export default ForgetPass;