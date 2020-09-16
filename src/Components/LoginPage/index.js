import React from 'react';
import './loginPage.css';
import iconeUser from '../../assets/IconeUser.png';

const LoginPage = props => {

    return (
        <div className={'caixa-login'}>
            <img id={'icone-user'} src={iconeUser}/>
            <form id={'formulario'}>

                <input id={'email'} type={'email'} name="email" placeholder={'Email: '}/>
                <input id={'senha'} type={'password'} name="senha" placeholder={'Senha: '}/>
                <input id={'login'} type={'submit'} name="login" value={'Login'}/>
                <a id={'esqueceu-senha'}>Esqueceu a senha</a>
                <p id={'nao-possui'}>Não possui login? <a id={'cadastrar'}>Cadastre-se</a></p>
            </form>
        </div>

    );
}

export default LoginPage;

