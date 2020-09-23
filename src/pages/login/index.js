import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";
import {Form, Input} from 'reactstrap';

import Fundo from '../../assets/backgroundLogin.jpg';
import IconeUser from '../../assets/iconeuser.png';

const LoginPage = props => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();
    const routeChange = (name) => { let path = `/`.concat(name); history.push(path); }

    return (
        <div className={'corpo'}>
            <Link id={'empresa-login'} to="/"><b>Tech Center</b></Link>
            <img id={'fundoLogin'} src={Fundo}/>
        <div className={'caixa-login-login'}>
            <img id={'icone-user'} src={IconeUser}/>

            <Form id={'formulario-login'}>

                <Input id={'email-login'} value={email} type={'email'} name="email" placeholder={'Email:'}  onChange={text => {setEmail(text); setEmail(text.target.value)}} />
                <Input id={'senha-login'} type={'password'} name="senha" placeholder={'Senha: '} onChange={text => {setSenha(text); setSenha(text.target.value)}} />
                <button id={'login-login'} onClick={evt => routeChange('')}>Login </button>
                <a id={'esqueceu-senha-login'}>Esqueceu a senha</a>
               <p id={'nao-possui-login'} >Não possui login? <Link id={'cadastro'} to="/">Cadastre-se</Link></p>
            </Form>
        </div>
        </div>

    );
}

export default LoginPage;

