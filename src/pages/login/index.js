import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";
import IconeUser from '../../assets/iconeuser.png';
import auth from "../../services/auth";


function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [instrucaoLogin, setInstrucaoLogin] = useState(false);

    const history = useHistory();

    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    async function efetuarLogin(email, senha) {
        let isAuthorization = false;

        try {
            let response = await auth.post('/users/login', {email, senha});

            if (response.data.authorization == true){
                isAuthorization = true;
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

    // function checaCredenciais(login, password) {
    //     if (email == "fellipemarra@hotmail.com" && senha=="123"){
    //         routeChange("cliente");
    //     }else
    //         return alert ("Login incorreto");
    // }

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

                           <alert value={instrucaoLogin} onChange={(textAlert)=>setInstrucaoLogin(textAlert.target.value)}/>


                    <button id={'login'} onClick={event => efetuarLogin(email, senha)}> Login </button>

                    <a id={'esqueceu-senha'}>Esqueceu a senha</a>

                    <p id={'nao-possui-login'}>Não possui login? <Link id={'cadastro'} to="/user">Cadastre-se</Link></p>

                </form>
            </div>
        </div>

    );
}

export default Login;

