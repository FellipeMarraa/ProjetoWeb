import React from 'react';
import './loginPage.css';
import iconeUser from '../../assets/IconeUser.png';
import {Link} from "react-router-dom";

const LoginPage = props => {

    return (
        <div className={'caixa-login-login'}>
            <img id={'icone-user-login'} src={iconeUser}/>
            <form id={'formulario-login'}>

                <input id={'email-login'} type={'email'} name="email" placeholder={'Email: '}/>
                <input id={'senha-login'} type={'password'} name="senha" placeholder={'Senha: '}/>
                <input id={'login-login'} type={'submit'} name="login" value={'Login'}/>
                <a id={'esqueceu-senha-login'}>Esqueceu a senha</a>
                <p id={'nao-possui-login'}>Não possui login? <Link to='./CadastroPage'> <a
                    id={'cadastrar-login'}>Cadastre-se</a> </Link></p>
            </form>
        </div>

    );
}

export default LoginPage;

