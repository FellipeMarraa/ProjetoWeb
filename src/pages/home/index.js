import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import {Form, Input} from 'reactstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";


import HeaderImage from '../../assets/cliente.png';
import NotificacaoImage from '../../assets/notificacao.png';
import JogandoImage from '../../assets/jogando.jpg';
import EconomiaImage from '../../assets/economia.png';
import SegurancaImage from '../../assets/seguranca.png';
import ComoFuncionaImage from '../../assets/imageComoFunciona.jpg';
import SemCustoImage from '../../assets/semCusto.png';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Whatsapp from '../../assets/whatsapp.png';
import Baixar from '../../assets/baixar.png';
import Email from '../../assets/email.png';
import Telefone from '../../assets/telefone.png';

const CadastroPage = props => {

    return (
        <div id={'conteudo'}>
            <nav id={'cabecalho-landing'}>
                <AnchorLink id={'home-landing'} href='#header'>Home</AnchorLink>
                <AnchorLink id={'como-funciona-landing'} href='#texto-notificacao'>Como funciona</AnchorLink>
                <AnchorLink id={'sobre-landing'} href='#texto-quanto-custa-cadastro'>Sobre</AnchorLink>
                <AnchorLink id={'contato-landing'} href='#rodape-landing'>Contato</AnchorLink>
                <Link id={'empresa-landing'} to="/"><b>Tech Center</b></Link>
                <Link id={'login-landing'} to="/login">Entrar</Link>
                <AnchorLink id={'cadastre-landing'} href="#header">Cadastre sua empresa</AnchorLink>
            </nav>
            <div id={'header'}>
                <div className={'caixa-cadastro'}>
                    <p id={'titulo-formulario-cadastro'}><b>Consiga <span
                        id={'mais-clientes'}> mais clientes </span> para seu negócio</b></p>
                    <p id={'subtitulo-formulario-cadastro'}><b>Cadastre-se e veja todos os serviços disponíveis para
                        você!</b></p>
                    <Form id={'formulario-cadastro'}>
                        <Input id={'nome-cadastro'} type={'text'} name="nome" placeholder={'Nome: '}/>
                        <Input id={'email-cadastro'} type={'email'} name="email" placeholder={'Email: '}/>
                        <Input id={'senha-cadastro'} type={'password'} name="senha" placeholder={'Senha: '}/>
                        <Input id={'repetir-senha-cadastro'} type={'password'} name="repetir-senha"
                               placeholder={'Repetir senha: '}/>
                        <Input id={'cadastro-cadastro'} type={'submit'} name="cadastro" value={'Cadastrar'}/>
                    </Form>
                </div>
                <img id={'header-image'} src={HeaderImage}/>
            </div>
            <div id={'explicacao-cadastro'}>
                <img id={'notificacao-image'} src={NotificacaoImage}/>
                <p id={'texto-notificacao'}>Receba alertas de serviços no seu aparelho <br/> de onde estiver</p>
                <img id={'economia-image'} src={EconomiaImage}/>
                <p id={'texto-economia'}>100% do valor do serviço é seu e nós <br/>não cobramos mensalidade! </p>
                <img id={'seguranca-image'} src={SegurancaImage}/>
                <p id={'texto-seguranca'}>Tenha segurança com seus dados e <br/> fique longe de possíveis golpes </p>
            </div>

            <div id={'como-funciona-cadastro'}>
                <h2 id={'titulo-como-funciona-cadastro'}>Como funciona</h2>
                <p id={'texto-como-funciona-cadastro'}>Todos os clientes que pedem por serviço aparecem no<br/> seu
                    aplicativo</p>
                <img id={'como-funciona-image'} src={ComoFuncionaImage}/>

            </div>

            <div id={'quanto-custa-cadastro'}>
                <h2 id={'titulo-quanto-custa-cadastro'}>Quanto custa?</h2>
                <p id={'texto-quanto-custa-cadastro'}>A Tech Center não tem mensalidade, e não paga nada para se
                    cadastrar.<br/>
                    Você só investe em serviços que te interessar, <b>e fica com 100% do<br/>valor do serviço.</b></p>
                <img id={'quanto-custa-image'} src={SemCustoImage}/>

            </div>

            <div id={'sobre-nos-cadastro'}>
                <h2 id={'titulo-sobre-nos-cadastro'}>O que nos torna a melhor plataforma</h2>
                <p id={'texto-sobre-nos-cadastro'}>São profissionais que transformaram sua carreira em um sucesso,<br/>
                    que tornaram a Tech Center a melhor plataforma de serviços.</p>
                <img id={'sobre-nos-image'} src={JogandoImage}/>
            </div>

            <footer id={'informacoes-landing'}>
                <dl id={'servicos-informacoes'}>Serviços
                <dt><br/>Montagem e manutenção de computadores</dt>
                    <dt><br/>Criação de sites e aplicativos</dt>
                    <dt><br/>Design e criação de banners</dt>
                </dl>
                <img id={'instagram-icon'} src={Instagram}/>
                <img id={'facebook-icon'} src={Facebook}/>
                <img id={'whatsapp-icon'} src={Whatsapp}/>
                <img id={'baixar-icon'} src={Baixar}/>
                <dl id={'rede-social-informacoes'}>Redes Sociais
                    <dt id={'instagram'}><br/>Instagram</dt>
                    <dt id={'facebook'}><br/>Facebook</dt>
                    <dt id={'whatsapp'}><br/>Whatsapp</dt>
                </dl>
                <p id={'downloads-informacoes'}>Downloads</p>

                <p id={'mais-informacoes'}>Mais informações</p>
                <img id={'email-icon'} src={Email}/>
                <p id={'email-informacoes'}>contact@contactus.com.br</p>
                <img id={'telefone-icon'} src={Telefone}/>
                <p id={'telefone-informacoes'}>(34) 3232-3232</p>
                <p id={'empresa'}>&copy; 2020 Tech Center 99.999.999/9999-99</p>
            </footer>

        </div>

    );
}

export default CadastroPage;
