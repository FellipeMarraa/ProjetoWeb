import React from 'react';
import './cadastroPage.css';
import iconeUser from '../../assets/IconeUser.png';

const CadastroPage = props => {

    return (
        <div className={'caixa-login'}>
            <img id={'icone-user'} src={iconeUser}/>
            <form id={'formulario'}>

                <input id={'nome'} type={'text'} name="nome" placeholder={'Nome: '}/>
                <input id={'email'} type={'email'} name="email" placeholder={'Email: '}/>
                <input id={'senha'} type={'password'} name="senha" placeholder={'Senha: '}/>
                <input id={'repetir-senha'} type={'password'} name="repetir-senha" placeholder={'Repetir senha:'}/>
                <input id={'cadastro'} type={'submit'} name="cadastro" value={'Cadastrar'}/>
                <p id={'ja-possui'}>Já possui cadastro? <a id={'login'}>Fazer login</a></p>
            </form>
        </div>

    );
}

export default CadastroPage;
