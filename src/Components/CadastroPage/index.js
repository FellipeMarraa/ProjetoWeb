import React from 'react';
import './cadastroPage.css';
import iconeUser from '../../assets/IconeUser.png';
import {Link} from "react-router-dom";

const CadastroPage = props => {

    return (
        <div className={'caixa-login-cadastro'}>
            <img id={'icone-user-cadastro'} src={iconeUser}/>
            <form id={'formulario-cadastro'}>

                <input id={'nome-cadastro'} type={'text'} name="nome" placeholder={'Nome: '}/>
                <input id={'email-cadastro'} type={'email'} name="email" placeholder={'Email: '}/>
                <input id={'senha-cadastro'} type={'password'} name="senha" placeholder={'Senha: '}/>
                <input id={'repetir-senha-cadastro'} type={'password'} name="repetir-senha"
                       placeholder={'Repetir senha:'}/>
                <input id={'cadastro-cadastro'} type={'submit'} name="cadastro" value={'Cadastrar'}/>
                <p id={'ja-possui-cadastro'}>Já possui cadastro? <Link to='./LoginPage'> <a id={'login-cadastro'}>Fazer
                    login</a> </Link></p>
            </form>
        </div>

    );
}

export default CadastroPage;
