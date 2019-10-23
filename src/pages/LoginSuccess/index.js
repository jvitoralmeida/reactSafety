import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import homer from './img/homer.jpg';

class LoginSuccess extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {};
    }

    render(){
        const { resultado } = this.props.location.state;
        console.log(resultado);
        return (
            <section className="container stretch column">
                <div className="item">
                <h1>Você foi logado</h1>
                <ul>
                    <li>Id Elastic: {resultado.id}</li>
                    <li>Nome: {resultado.nome}</li>
                    <li>Username: {resultado.username}</li>
                    <li>Email: {resultado.email}</li>
                </ul>
                </div>
	            <div className="item"><img src={homer} className="foto" alt="Homer Simpson comemorando"></img></div>
            </section>
        )
    }
}

export default LoginSuccess;