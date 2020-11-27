import React, {useState} from 'react';
import './login.css';
import {Link, useHistory} from "react-router-dom";
import IconeUser from '../../assets/iconeuser.png';

const Login = props => {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    // const [token, setToken] = useState("");

    const history = useHistory();

    const routeChange = (name) => {
        let path = '/'.concat(name);
        history.push(path);
    }

    async function efetuarLogin(login, senha) {
        try {
            console.log("Entrou no processo de envio para o back end")
            let retorno = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },

                body: JSON.stringify(
                    {
                        login: login,
                        senha: senha
                    }
                )
            });

            let json = await retorno.json();

            localStorage.setItem('token', json.token);

            console.log(localStorage.getItem("token"));

            if (json.body.login != null) {
                routeChange(json.tipo);
            } else {
                alert("Usuario nao autorizado")
            }
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div>

            <div className={'caixa-login'}>
                <img id={'icone-user-login'} src={IconeUser}/>

                <form id={'formulario-login'}>

                    <input id={'email-login'} value={login} type={'email'} name="email" placeholder={'Email:'}
                           onChange={textEmail => {
                               setLogin(textEmail.target.value);
                           }}/>


                    <input id={'senha-login'} value={senha} type={'password'} name="senha" placeholder={'Senha: '}
                           onChange={textSenha => {
                               setSenha(textSenha);
                               setSenha(textSenha.target.value);
                           }}/>

                    <button id={'login'} onClick={() => {
                        efetuarLogin(login, senha);
                        routeChange()
                    }}> Login
                    </button>

                    <a id={'esqueceu-senha-login'}>Esqueceu a senha</a>

                    <p id={'nao-possui-login'}>Não possui login? <Link id={'cadastro-login'} to="/">Cadastre-se</Link></p>

                </form>
            </div>
        </div>

    );
}

export default Login;

