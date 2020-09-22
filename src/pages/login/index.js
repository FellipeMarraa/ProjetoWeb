import React from 'react';
import './index.css';
import iconeUser from '../../assets/IconeUser.png';
import {Link} from "react-router-dom";
import {Form, Input} from 'reactstrap';

const LoginPage = props => {

    return (
        <div className={'caixa-login-login'}>
            <img id={'icone-user-login'} src={iconeUser}/>
            <Form id={'formulario-login'}>

                <Input id={'email-login'} type={'email'} name="email" placeholder={'Email: '}/>
                <Input id={'senha-login'} type={'password'} name="senha" placeholder={'Senha: '}/>
                <Input id={'login-login'} type={'submit'} name="login" value={'Login'}/>
                <a id={'esqueceu-senha-login'}>Esqueceu a senha</a>
                <p id={'nao-possui-login'}>Não possui login? <Link to='./CadastroPage'> <a
                    id={'cadastrar-login'}>Cadastre-se</a> </Link></p>
            </Form>
        </div>

    );
}

export default LoginPage;

