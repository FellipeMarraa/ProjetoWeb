import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";

import Fundo from '../../assets/backgroundLogin.jpg';
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

    // async function testeBackEnd() {
    //     try {
    //         let retorno = await fetch('http://localhost:5000/users', {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': '*'
    //             }
    //         });
    //         console.log(retorno)
    //         let json = await retorno.json();
    //         return json;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // function checaCredenciais(email, senha) {
    //     if (email=="fellipemarra@hotmail.com" && senha=="123"){
    //         routeChange("cliente");
    //     }else
    //         return alert ("Login incorreto");
    // }

    return (
        <div className={'body'}>
            <Link id={'empresa-login'} to="/"><b>Tech Center</b></Link>
            <img id={'fundoLogin'} src={Fundo}/>
            <div className={'caixa-login-login'}>
                <img id={'icone-user'} src={IconeUser}/>

                <form id={'formulario-login'}>

                    <input id={'email-login'} value={email} type={'email'} name="email" placeholder={'Email:'}
                           onChange={text => {
                               setEmail(text);
                               setEmail(console.log(text.target.value));
                           }}/>
                    <input id={'senha-login'} type={'password'} name="senha" placeholder={'Senha: '}
                           onChange={text => {
                               setSenha(text);
                               setSenha(text.target.value);
                           }}/>
                    <button id={'login-login'} onClick={() => {
                        // testeBackEnd();
                        // let checagem = checaCredenciais(email, senha);
                        // if (checagem[0]) {
                        //     console.log("Seu token ", checagem[0])
                        //     if (checagem[1] == 'cliente') {
                        //         routeChange("/cliente")
                        //     }
                        // } else {
                        //     alert("Login e/ou senha incorretos");
                        //     setEmail("");
                        //     setSenha("");
                        // }
                    }
                    }>Login
                    </button>
                    <a id={'esqueceu-senha-login'}>Esqueceu a senha</a>
                    <p id={'nao-possui-login'}>Não possui login? <Link id={'cadastro'} to="/">Cadastre-se</Link></p>
                </form>
            </div>
        </div>

    );
}

export default Login;

