import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";
import IconeUser from '../../assets/iconeuser.png';
import auth from "../../services/auth";
import Alert from "reactstrap/lib/Alert";



function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [instrucaoLogin, setInstrucaoLogin] = useState(false);
    const [tipo, setTipo] = useState("");

    const history = useHistory();

    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    async function efetuarLogin(email, senha) {
        let isAuthorization = false;

        try {
            console.log("Enctrou no processo de envio para o back end")
            let response = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },

                body: JSON.stringify(
                    {
                        login: email,
                        senha: senha
                    }
                )
            })


            if (response.data.authorization == true){
                isAuthorization = true;
                if (tipo == "profissional"){
                    routeChange("/profissional")
                }else{
                    routeChange("/user")
                }
            }
            console.log(response)
        } catch (error) {
            console.error(error);
        }

        if(isAuthorization){
            history.push('/profissional');
        } else{
            setInstrucaoLogin(true);
        }
    }

    function checaCredenciais(email, senha) {
        if (email == email.body.email && senha == senha.body.senha){
            routeChange("/user");
        }else
            return alert ("Login incorreto");
    }

    return (
        <div>

            <div className={'caixa-login'}>
                <img id={'icone-user'} src={IconeUser}/>

                <form id={'formulario'}>

                    <input id={'email'} value={email} type={'email'} name="email" placeholder={'Email:'}
                           onChange={textEmail => {setEmail(textEmail.target.value);
                           }}/>


                    <input id={'senha'} value={senha} type={'password'} name="senha" placeholder={'Senha: '}
                           onChange={textSenha => { setSenha(textSenha); setSenha(textSenha.target.value);
                           }}/>

                           {/*<Alert value={instrucaoLogin} onChange={(textAlert)=>setInstrucaoLogin(textAlert.target.value)}/>*/}


                    <button id={'login'} onClick={() => { efetuarLogin(email, senha);
                        let checagem = checaCredenciais(email, senha);
                        if (checagem[0]) {
                            console.log("Seu token ", checagem[0])
                            if (checagem[1] == 'cliente') {
                                routeChange("/user")
                            }
                        } else {
                            alert("Login e/ou senha incorretos");
                            setEmail("");
                            setSenha("");
                        }
                    }}> Login </button>

                    <a id={'esqueceu-senha'}>Esqueceu a senha</a>

                    <p id={'nao-possui-login'}>Não possui login? <Link id={'cadastro'} to="/user">Cadastre-se</Link></p>

                </form>
            </div>
        </div>

    );
}

export default Login;

