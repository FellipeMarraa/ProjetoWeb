import React, {userState} from 'react';
import './index.css';
import {Link} from "react-router-dom";
import {Form, Input} from 'reactstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";

const CadastroPage = props => {

    return (
        <div id={'conteudo'}>
            <nav id={'cabecalho-cadastro'}>
                <Link id={'empresa-cadastro'} to="/"><b>Tech Center</b></Link>
            </nav>
            <div id={'header'}>
        <div className={'caixa-cadastro'}>
            <p id={'titulo-formulario-cadastro'}><b>Consiga <span id={'mais-clientes'}> mais clientes </span> direto do seu celular</b></p>
            <p id={'subtitulo-formulario-cadastro'}><b>Cadastre-se e veja todos os serviços disponíveis para você!</b></p>
            <Form id={'formulario-cadastro'}>
                <Input id={'nome-cadastro'} type={'text'} name="nome" placeholder={'Nome: '}/>
                <Input id={'email-cadastro'} type={'email'} name="email"  placeholder={'Email: '}/>
                <Input id={'senha-cadastro'} type={'password'} name="senha" placeholder={'Senha: '}/>
                <Input id={'repetir-senha-cadastro'} type={'password'} name="repetir-senha"
                       placeholder={'Repetir senha: '}/>
                <Input id={'cadastro-cadastro'} type={'submit'} name="cadastro" value={'Cadastrar'}/>
                <p id={'ja-possui-cadastro'}>Já possui cadastro? <Link to='/Login'> <a id={'login-cadastro'}><b>Fazer
                    login</b></a> </Link></p>
            </Form>
        </div>
            </div>
            <div id={'explicacao-cadastro'}>

            </div>

            <div id={'como-funciona-cadastro'}>
                <h2 id={'titulo-como-funciona-cadastro'}>Como funciona</h2>
                <p id={'texto-como-funciona-cadastro'}>Todos os clientes que pedem por serviço aparecem no<br/> seu aplicativo:</p>
                {/*<img>*/}

            </div>

            <div id={'quanto-custa-cadastro'}>
                <h2 id={'titulo-quanto-custa-cadastro'}>Quanto custa?</h2>
                <p id={'texto-quanto-custa-cadastro'}>A Tech Center não tem mensalidade, e não paga nada para se cadastrar.<br/>
                    Você só investe em serviços que te interessar, <b>e fica com 100% do<br/>valor do serviço.</b></p>
                {/*<img>*/}

            </div>

            <div id={'sobre-nos-cadastro'}>
                <h2 id={'titulo-sobre-nos-cadastro'}>O que nos torna a melhor plataforma</h2>
                <p id={'texto-sobre-nos-cadastro'}>São profissionais que transformaram sua carreira em um sucesso,
                    que tornaram a Tech Center <br/>a melhor plataforma de serviços.</p>
                {/*<img>*/}
            </div>

            <div id={'informacoes-cadastro'}>

            </div>

            <footer id={'rodape-cadastro'}>
                <p>&copy; 2020  Tech Center  99.999.999/9999-99</p>
            </footer>

        </div>

    );
}

export default CadastroPage;
