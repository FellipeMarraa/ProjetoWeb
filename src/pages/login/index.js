import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";
import IconeUser from '../../assets/iconeuser.png';
import { useForm } from "react-hook-form";


function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [instrucaoSenha, setInstrucaoSenha] = useState("");

    const history = useHistory();

    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    async function testeBackEnd() {
        try {
            let retorno = await fetch('http://localhost:5000/users', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log(retorno)
            let json = await retorno.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    }

    function checaCredenciais(email, senha) {
        if (email=="fellipemarra@hotmail.com" && senha=="123"){
            routeChange("cliente");
        }else
            return alert ("Login incorreto");
    }

    return (
        <div>

            <div className={'caixa-login'}>
                <img id={'icone-user'} src={IconeUser}/>

                <form id={'formulario'}>

                    <input id={'email'} value={email} type={'email'} name="email" placeholder={'Email:'}
                           onChange={textEmail => {setEmail(textEmail);setEmail(console.log(textEmail.target.value));
                           }}/>


                    <input id={'senha'} value={senha} type={'password'} name="senha" placeholder={'Senha: '}
                           onChange={textSenha => { setSenha(textSenha); setSenha(textSenha.target.value);
                           }}/>

                           <alert value={instrucaoSenha} onChange={(textAlert)=>setInstrucaoSenha(textAlert.target.value)}/>


                    <button id={'login'} onClick={() => { testeBackEnd();
                        let checagem = checaCredenciais(email, senha);
                        if (checagem[0]) {
                            console.log("Seu token ", checagem[0])
                            if (checagem[1] == 'cliente') {
                                routeChange("/cliente")
                            }
                        } else {
                            alert("Login e/ou senha incorretos");
                            setEmail("");
                            setSenha("");
                        }
                    }}> Login
                    </button>

                    <a id={'esqueceu-senha'}>Esqueceu a senha</a>

                    <p id={'nao-possui-login'}>Não possui login? <Link id={'cadastro'} to="/user">Cadastre-se</Link></p>

                </form>
            </div>
        </div>

    );
}

export default Login;

