import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";
import IconeUser from '../../assets/iconeuser.png';

function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [instrucaoSenha, setInstrucaoSenha] = useState("");

    const history = useHistory();

    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    return (
        <div className={'body'}>

            <div className={'caixa-login'}>
                <img id={'icone-user'} src={IconeUser}/>

                <form id={'formulario'}>

                    <input id={'email'} value={email} type={'email'} name="email" placeholder={'Email:'}
                           onChange={text => {
                               setEmail(text);
                               setEmail(console.log(text.target.value));
                           }}/>


                    <input id={'senha'} type={'password'} name="senha" placeholder={'Senha: '}
                           onChange={text => {
                               setSenha(text);
                               setSenha(text.target.value);
                           }}/>


                    <button id={'login'} onClick={() => {
                    }}> Login
                    </button>

                    <a id={'esqueceu-senha'}>Esqueceu a senha</a>

                    <p id={'nao-possui-login'}>Não possui login? <Link id={'cadastro'} to="/">Cadastre-se</Link></p>

                </form>
            </div>
        </div>

    );
}

export default Login;

