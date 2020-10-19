import React, {useState} from 'react';
import './index.css';
import {Link, useHistory} from "react-router-dom";
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

import primeiraImagem from '../../assets/hide-the-pain-stockphoto-840x560 1.png';
import segundaImagem from '../../assets/tela-azul-da-morte-windows-10.jpg';
import terceiraImagem from '../../assets/1024px-Running_icon_-_Noun_Project_17825.svg.png';
import Nav from "reactstrap/es/Nav";
import Form from "reactstrap/es/Form";
import passwordValidator from "password-validator";



function SignIn() {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [cpf, setCpf] = useState("");
    const [instrucaoSenha, setIntrucaoSenha] = useState("");
    const history = useHistory();

    const routeChange = (name) => {
        let path = `/`.concat(name);
        history.push(path);
    }

    // var schema = new passwordValidator();
    // schema
    //     .is().min(8)                                    // Minimum length 8
    //     .is().max(100)                                  // Maximum length 100
    //     .has().uppercase()                              // Must have uppercase letters
    //     .has().lowercase()                              // Must have lowercase letters
    //     .has().digits(2)                                // Must have at least 2 digits
    //     .has().not().spaces()                           // Should not have spaces
    //     .is().not().oneOf(['Passw0rd', 'Password123', '123']); // Blacklist these values
    // return schema.validate(senha);

    async function sendInput() {

        try {

            let retorno = await fetch('http://localhost:5000/users/cadastro', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },

                body: JSON.stringify(
                    {
                        login: login,
                        senha: senha,
                        nome: nome,
                        tipo: tipo,
                        cpf: cpf
                    }
                )
            });

            let json = await retorno.json()
            console.log(json);
            return retorno;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <body id={'conteudo'}>
        <Nav id={'cabecalho'}>
            <AnchorLink id={'home-cabecalho'} href='#header'>Home</AnchorLink>
            <AnchorLink id={'como-funciona-cabecalho'} href='#explicacao-texto-notificacao'>Como funciona</AnchorLink>
            <AnchorLink id={'sobre-cabecalho'} href='#texto-quanto-custa'>Sobre</AnchorLink>
            <AnchorLink id={'contato-cabecalho'} href='#rodape-telefone'>Contato</AnchorLink>
            <Link id={'empresa-cabecalho'} to="/"><b>Tech Center</b></Link>
            <Link id={'login-cabecalho'} to="/login">Entrar</Link>
        </Nav>

        {/*======================================Começo do Header======================================================*/}

        <header id={'header'}>

            <img id={'header-image'} src={HeaderImage}/>

            <div className={'caixa-cadastro'}>

                <p id={'titulo-formulario'}><b> Consiga <span id={'mais-clientes'}> mais clientes </span> para seu
                    negócio</b></p>
                <p id={'subtitulo-formulario'}><b>Cadastre-se e veja todos os serviços disponíveis para você!</b></p>

                {/*======================================Formulario de Cadastro======================================*/}

                <Form id={'formulario-cadastro'}>

                    <input id={'email-cadastro'} value={login} type={'email'} name="email" placeholder={'Email: '} maxLength={256} onChange={(textLogin)=>setLogin(textLogin.target.value)} />
                    {/*<input id={'senha-cadastro'} value={senha} type={'password'} name="senha" placeholder={'Senha: '} maxLength={256} onChange={(textSenha)=> {setSenha(textSenha.target.value); let checarSenha = passwordValidator();*/}
                    {/*if(checarSenha){*/}
                    {/*    console.log("A senha n'ao pode ser essa");*/}
                    {/*}}}/>*/}
                    <input id={'nome-cadastro'} value={nome} type={'text'} name="nome" placeholder={'Nome: '} maxLength={256} onChange={(textNome)=>setNome(textNome.target.value)}/>

                    <select value={tipo} id={'tipo-cadastro'} onChange={(textTipo)=>setTipo(textTipo.target.value)}>
                        <option value="Selecione uma opcao">Selecione um tipo</option>
                        <option value="cliente">Cliente</option>
                        <option value="profissional">Profissional</option>
                    </select>
                    <input value={cpf} id={'cpf-cadastro'} type={'text'} name="cpf" placeholder={'CPF: '} maxLength={14} mask={"999.999.999-99"} onChange={(textCpf)=>setCpf(textCpf.target.value)}/>

                    <button id={'cadastrar'} type={"submit"} onClick={() => sendInput()}> Cadastrar</button>
                </Form>

            </div>

            {/*======================================Fim do formulário======================================*/}
        </header>

        {/*======================================Fim do Header======================================*/}


        {/*======================================Inicio das Informações======================================*/}

        <article id={'explicacao'}>

            <img id={'explicacao-notificacao-image'} src={NotificacaoImage}/>
            <p id={'explicacao-texto-notificacao'}>Receba alertas de serviços no seu aparelho <br/> de onde estiver</p>
            <img id={'explicacao-economia-image'} src={EconomiaImage}/>
            <p id={'explicacao-texto-economia'}>100% do valor do serviço é seu e nós <br/>não cobramos mensalidade! </p>
            <img id={'explicacao-seguranca-image'} src={SegurancaImage}/>
            <p id={'explicacao-texto-seguranca'}>Tenha segurança com seus dados e <br/> fique longe de possíveis golpes
            </p>

        </article>

        {/*======================================Fim da explicação======================================*/}


        {/*Inicio do texto de Como funciona*/}

        <article id={'como-funciona'}>

            <h2 id={'titulo-como-funciona'}>Como funciona</h2>
            <p id={'texto-como-funciona'}>Todos os clientes que pedem por serviço aparecem no<br/> seu aplicativo</p>
            <img id={'como-funciona-image'} src={ComoFuncionaImage}/>

        </article>

        {/*======================================Fim do texto de Como Funciona======================================*/}


        {/*======================================Inicio do texto de Quanto custa======================================*/}

        <article id={'quanto-custa'}>

            <h2 id={'titulo-quanto-custa'}>Quanto custa?</h2>
            <p id={'texto-quanto-custa'}>A Tech Center não tem mensalidade, e não paga nada para se cadastrar.<br/> Você
                só investe em serviços que te interessar,
                <b>e fica com 100% do<br/>valor do serviço.</b></p>
            <img id={'quanto-custa-image'} src={SemCustoImage}/>

        </article>


        {/*======================================Fim do texto de Quanto custa======================================*/}


        {/*======================================Inicio do texto Sobre a empresa======================================*/}

        <article id={'sobre-nos-cadastro'}>

            <h2 id={'titulo-sobre-nos'}>O que nos torna a melhor plataforma</h2>
            <p id={'texto-sobre-nos'}>São profissionais que transformaram sua carreira em um sucesso,<br/>
                que tornaram a Tech Center a melhor plataforma de serviços.</p>

            <img id={'sobre-nos-image'} src={JogandoImage}/>

        </article>

        {/*======================================Inicio Primeiro texto====================================== */}

        <artcile id={'primeiro-texto'}>

            <p>A Tech Center oferece Assistência Técnica em Informática para
                manutenção
                de
                computadores
                e notebooks, criação de sites/aplicativos e quaisquer outras
                necessidades relacionadas à tecnologia. Nossos colaboradores prestam serviços de assistência técnica em
                informática
                baseada em vasta experiência no ramo, sempre com garantia, segurança e
                alta qualidade, para empresas e residências em Uberlândia.</p>

            <img id={'primeira-imagem'} src={primeiraImagem}/>

        </artcile>

        {/*======================================Inicio Segundo texto====================================== */}


        <article id={'segundo-texto'}>

            <p>Seja qual for o problema apresentado pelo seu computador, temos a
                certeza que
                podemos apresentar uma solução. Os profissionais vao ate sua empresa ou residência, sanando
                o defeito no local. Nosso objetivo é sempre deixar nossos clientes plenamente satisfeitos, pois
                nossa melhor propaganda é a própria indicação deles.</p>

            <img id={'segunda-imagem'} src={segundaImagem}/>
        </article>

        {/*======================================Inicio Terceiro texto======================================*/}

        <article id={'terceiro-texto'}>
            <p>Compreendemos que quando acontecem problemas com seus computadores
                você
                ou
                sua empresa pode ficar sem produzir e perder dinheiro. Portanto procuramos
                atender e solucionar seus problemas o mais rápido possível para que sua produtividade volte ao
                normal.</p>

            <img id={'terceira-imagem'} src={terceiraImagem}/>
        </article>

        {/*======================================Fim dos textos Sobre a empresa======================================*/}


        {/*======================================Inicio do Rodapé======================================*/}

        <footer id={'rodape'}>

            <dl id={'rodape-servicos'}>Serviços
                <dt><br/>Montagem e manutenção de computadores</dt>
                <dt><br/>Criação de sites e aplicativos</dt>
                <dt><br/>Design e criação de banners</dt>

            </dl>

            {/*======================================Icones do rodape======================================*/}

            <img id={'rodape-instagram-icon'} src={Instagram}/>
            <img id={'rodape-facebook-icon'} src={Facebook}/>
            <img id={'rodape-whatsapp-icon'} src={Whatsapp}/>
            <img id={'rodape-baixar-icon'} src={Baixar}/>


            {/*======================================Redes sociais======================================*/}

            <dl id={'rodape-rede-social'}>Redes Sociais
                <dt id={'rodape-instagram'}><br/>Instagram</dt>
                <dt id={'rodape-facebook'}><br/>Facebook</dt>
                <dt id={'rodape-whatsapp'}><br/>Whatsapp</dt>
            </dl>

            {/*======================================Downloads======================================*/}

            <p id={'rodape-downloads'}>Downloads</p>
            <p id={'rodape-mais-informacoes'}>Mais informações</p>

            <img id={'rodape-email-icon'} src={Email}/>

            <p id={'rodape-email'}>contact@contactus.com.br</p>

            <img id={'rodape-telefone-icon'} src={Telefone}/>

            <p id={'rodape-telefone'}>(34) 3232-3232</p>
            <p id={'rodape-empresa'}>&copy; 2020 Tech Center 99.999.999/9999-99</p>
        </footer>

        {/*======================================Fim do rodape======================================*/}

        </body>

    );
}

export default SignIn;
