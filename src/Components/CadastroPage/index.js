import React from 'react';
import './cadastroPage.css';
import iconeUser from '../../assets/IconeUser.png';
import {Link} from "react-router-dom";
import {Form, Input} from 'reactstrap';

const CadastroPage = props => {

    return (
        <div className={'caixa-login-cadastro'}>
            <img id={'icone-user-cadastro'} src={iconeUser}/>
            <Form id={'formulario-cadastro'}>

                <Input id={'nome-cadastro'} type={'text'} name="nome" placeholder={'Nome: '}/>
                <Input id={'email-cadastro'} type={'email'} name="email" placeholder={'Email: '}/>
                <Input id={'senha-cadastro'} type={'password'} name="senha" placeholder={'Senha: '}/>
                <Input id={'repetir-senha-cadastro'} type={'password'} name="repetir-senha"
                       placeholder={'Repetir senha: '}/>
                <Input id={'cadastro-cadastro'} type={'submit'} name="cadastro" value={'Cadastrar'}/>
                <p id={'ja-possui-cadastro'}>Já possui cadastro? <Link to='./LoginPage'> <a id={'login-cadastro'}>Fazer
                    login</a> </Link></p>
            </Form>
        </div>

    );
}

export default CadastroPage;
