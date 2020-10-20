import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";
import IconeUser from '../../assets/iconeuser.png';

function Login(props) {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();

    const routeChange = (name) => {
        let path = '/'.concat(name);
        history.push(path);
    }

    async function efetuarLogin(login, senha) {
        try {
            console.log("Entrou no processo de envio para o back end")
            let response = await fetch('http://localhost:5000/users/login', {
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
            })
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }
    function checaCredenciais(req){
        const tipo = req.body.tipo;
        if(tipo == 'profissional'){
            routeChange('profissional');
        }else if (tipo == 'cliente'){
            routeChange('user');
        }
    }
    return (
        <div>

            <div className={'caixa-login'}>
                <img id={'icone-user'} src={IconeUser}/>

                <form id={'formulario'}>

                    <input id={'email'} value={login} type={'email'} name="email" placeholder={'Email:'}
                           onChange={textEmail => {setLogin(textEmail.target.value);
                           }}/>


                    <input id={'senha'} value={senha} type={'password'} name="senha" placeholder={'Senha: '}
                           onChange={textSenha => { setSenha(textSenha); setSenha(textSenha.target.value);
                           }}/>

                    <button id={'login'} onClick={() => {efetuarLogin(login, senha); routeChange()
                    // let checagem = checaCredenciais();
                    // if(checagem[0]){
                    //     console.log(checagem[0])
                    //     if(checagem[1] == 'cliente'){
                    //         routeChange("/user")
                    //     }else if(checagem[1] == 'profissional'){
                    //         routeChange("/profissional")
                    //     }else{
                    //         alert("login incorreto");
                    //     }
                    // }
                    }}> Login </button>

                    <a id={'esqueceu-senha'}>Esqueceu a senha</a>

                    <p id={'nao-possui-login'}>Não possui login? <Link id={'cadastro'} to="/user">Cadastre-se</Link></p>

                </form>
            </div>
        </div>

    );
}

export default Login;

