import React, {useState} from 'react';
import './home.css';
import {useHistory} from "react-router-dom";
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
import Linkedin from '../../assets/linkedin.png';
import Google from '../../assets/google.png';
import Baixar from '../../assets/baixar.png';
import Email from '../../assets/email.png';
import Telefone from '../../assets/telefone.png';
import Menu from '../../assets/menu.png'

import primeiraImagem from '../../assets/hide-the-pain-stockphoto-840x560 1.png';
import segundaImagem from '../../assets/tela-azul-da-morte-windows-10.jpg';
import terceiraImagem from '../../assets/1024px-Running_icon_-_Noun_Project_17825.svg.png';
import Nav from "reactstrap/es/Nav";
import Form from "reactstrap/es/Form";
import Button from "reactstrap/es/Button";
import passwordValidator from 'password-validator';


const Home = props => {

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [cpf, setCpf] = useState("");
    const history = useHistory();

    function validationPassword(senha){
        let schema = new passwordValidator();
        schema
            .is().min(8)                                    // Minimum length 8
            .is().max(100)                                  // Maximum length 100
            .has().uppercase()                              // Must have uppercase letters
            .has().lowercase()                              // Must have lowercase letters
            .has().digits(2)                                // Must have at least 2 digits
            .has().not().spaces()                           // Should not have spaces
            .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
        return schema.validate(senha)
    }

    const routeChange = (name) => {
        let path = '/'.concat(name);
        history.push(path);
    }

    async function efetuarCadastro() {

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

            let json = await retorno.json();

            localStorage.setItem('token', json.token);

            console.log(localStorage.getItem("token"));

            if (json.tipo) {
                routeChange(json.tipo);
            } else {
                alert("Usuario nao autorizado")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className={'container-fluid p-0'}>
            <Nav className={'navbar navbar-expand-md'} id={'cabecalho'}>

                <Button className={'navbar-toggler'} type={'button'} data-toggle={'collapse'}
                        data-target={"#navbarMainToggler"}
                        aria-controls={'navbarMainToggler'} aria-expanded="true" aria-label="Toggle navigation"> <span>
                    <img id={'menu'} src={Menu}/> </span></Button>


                <a className={'navbar-brand'} id={'empresa-cabecalho'}>
                    <b>Tech Center</b></a>

                <div className={'collapse navbar-collapse'} id={'navbarMainToggler'}>

                    <div className={'navbar-nav ml-auto'}>

                        <AnchorLink className={'nav-item nav-link'} id={'home-cabecalho'}
                                    href='#header'>Home</AnchorLink>
                        <AnchorLink className={'nav-item nav-link'} id={'como-funciona-cabecalho'}
                                    href='#explicacao-texto-notificacao'>Como funciona</AnchorLink>
                        <AnchorLink className={'nav-item nav-link'} id={'sobre-cabecalho'}
                                    href='#texto-quanto-custa'>Sobre</AnchorLink>
                        <AnchorLink className={'nav-item nav-link'} id={'contato-cabecalho'}
                                    href='#rodape-telefone'>Contato</AnchorLink>
                    </div>
                </div>


                <Button type={'button'} id={'login-cabecalho'}
                        onClick={() => routeChange('login')}> Entrar </Button>



            </Nav>


            {/*/!*======================================Começo do Header======================================================*!/*/}

            <section className={'container-fluid col-12 d-flex justify-content-around'} id={'header'}>

                            <div id={'caixa-cadastro'}>

                                <div id={'textoFormulario'}>
                                <p id={'tituloForm'}><b> Consiga <span id={'mais-clientes'}> mais clientes </span> para seu
                                    negócio</b></p>
                                <p id={'subtitulo-formulario'}><b>Cadastre-se e veja todos os serviços disponíveis para você!</b></p>
                                </div>
                                <Form id={'formulario-cadastro'}>

                                    <input className={'form-control'} id={'email-cadastro'} required={true} value={login} type={'email'} name="email"
                                           placeholder={'Email: '} maxLength={256}
                                           onChange={(textLogin) => setLogin(textLogin.target.value)}/>

                                    <input id={'senha-cadastro'} required={true} value={senha} type={'password'} name="senha"
                                           placeholder={'Senha: '} maxLength={256} onChange={(textSenha) => {
                                        setSenha(textSenha.target.value); console.log(validationPassword(senha))
                                    }}/>

                                    <input id={'nome-cadastro'} required={true} value={nome} type={'text'} name="nome"
                                           placeholder={'Nome: '} maxLength={256}
                                           onChange={(textNome) => setNome(textNome.target.value)}/>

                                    <select required={true} value={tipo} id={'tipo-cadastro'}
                                            onChange={(textTipo) => setTipo(textTipo.target.value)}>
                                        <option value="Selecione uma opcao">Selecione um tipo</option>
                                        <option value="cliente">Cliente</option>
                                        <option value="profissional">Profissional</option>
                                    </select>
                                    <input value={cpf} id={'cpf-cadastro'} required={true} type={'text'} name="cpf"
                                           placeholder={'CPF: '} maxLength={14} mask={"999.999.999-99"}
                                           onChange={(textCpf) => setCpf(textCpf.target.value)}/>

                                    <div id={'cadastrarP'}><button id={'cadastrar'} type={"submit"} onClick={() => {
                                        efetuarCadastro();
                                        routeChange("perfil-".concat(tipo))
                                    }}><b> Cadastrar </b>
                                    </button> </div>
                                </Form>

                                <img className={'mr-3'} id={'header-image'} src={HeaderImage}/>

                            </div>


                {/*    /!*======================================Formulario de Cadastro======================================*!/*/}



                {/*</div>*/}

                {/*======================================Fim do formulário======================================*/}
            </section>

            {/*/!*======================================Fim do Header======================================*!/*/}


            {/*/!*======================================Inicio das Informações======================================*!/*/}

            <section className={'container-fluid col-12 d-flex justify-content-around'} id={'explicacao'}>

                <img id={'explicacao-notificacao-image'} src={NotificacaoImage}/>
                <p id={'explicacao-texto-notificacao'}>Receba alertas de serviços no seu aparelho <br/> de onde estiver
                </p>
                <img id={'explicacao-economia-image'} src={EconomiaImage}/>
                <p id={'explicacao-texto-economia'}>100% do valor do serviço é seu e nós <br/>não cobramos mensalidade!
                </p>
                <img id={'explicacao-seguranca-image'} src={SegurancaImage}/>
                <p id={'explicacao-texto-seguranca'}>Tenha segurança com seus dados e <br/> fique longe de possíveis
                    golpes
                </p>

            </section>

            {/*/!*======================================Fim da explicação======================================*!/*/}


            {/*Inicio do texto de Como funciona*/}

            <section className={'container-fluid col-12 d-flex justify-content-around'} id={'como-funciona'}>
                <div id={'comoFuncionaDiv'}>
                <h2 id={'titulo-como-funciona'}>Como funciona</h2>
                <p id={'texto-como-funciona'}>Todos os clientes que pedem por serviço aparecem no<br/> seu aplicativo
                </p>
                <img id={'como-funciona-image'} src={ComoFuncionaImage}/>
                </div>
            </section>

            {/*/!*======================================Fim do texto de Como Funciona======================================*!/*/}


            {/*/!*======================================Inicio do texto de Quanto custa======================================*!/*/}

            <section className={'container-fluid col-12 d-flex justify-content-around'} id={'quanto-custa'}>

                <h2 id={'titulo-quanto-custa'}>Quanto custa?</h2>
                <p id={'texto-quanto-custa'}>A Tech Center não tem mensalidade, e não paga nada para se
                    cadastrar.<br/> Você
                    só investe em serviços que te interessar,
                    <b>e fica com 100% do<br/>valor do serviço.</b></p>
                <img id={'quanto-custa-image'} src={SemCustoImage}/>

            </section>


            {/*/!*======================================Fim do texto de Quanto custa======================================*!/*/}


            {/*/!*======================================Inicio do texto Sobre a empresa======================================*!/*/}

            {/*<div id={'sobre-nos-cadastro'}>*/}

            {/*    <h2 id={'titulo-sobre-nos'}>O que nos torna a melhor plataforma</h2>*/}
            {/*    <p id={'texto-sobre-nos'}>São profissionais que transformaram sua carreira em um sucesso,<br/>*/}
            {/*        que tornaram a Tech Center a melhor plataforma de serviços.</p>*/}

            {/*    <img id={'sobre-nos-image'} src={JogandoImage}/>*/}

            {/*</div>*/}

            {/*/!*======================================Inicio Primeiro texto====================================== *!/*/}

            {/*<div id={'primeiro-texto'}>*/}

            {/*    <p>A Tech Center oferece Assistência Técnica em Informática para*/}
            {/*        manutenção*/}
            {/*        de*/}
            {/*        computadores*/}
            {/*        e notebooks, criação de sites/aplicativos e quaisquer outras*/}
            {/*        necessidades relacionadas à tecnologia. Nossos colaboradores prestam serviços de assistência técnica*/}
            {/*        em*/}
            {/*        informática*/}
            {/*        baseada em vasta experiência no ramo, sempre com garantia, segurança e*/}
            {/*        alta qualidade, para empresas e residências em Uberlândia.</p>*/}

            {/*    <img id={'primeira-imagem'} src={primeiraImagem}/>*/}

            {/*</div>*/}

            {/*/!*======================================Inicio Segundo texto====================================== *!/*/}


            {/*<div id={'segundo-texto'}>*/}

            {/*    <p>Seja qual for o problema apresentado pelo seu computador, temos a*/}
            {/*        certeza que*/}
            {/*        podemos apresentar uma solução. Os profissionais vao ate sua empresa ou residência, sanando*/}
            {/*        o defeito no local. Nosso objetivo é sempre deixar nossos clientes plenamente satisfeitos, pois*/}
            {/*        nossa melhor propaganda é a própria indicação deles.</p>*/}

            {/*    <img id={'segunda-imagem'} src={segundaImagem}/>*/}
            {/*</div>*/}

            {/*/!*======================================Inicio Terceiro texto======================================*!/*/}

            {/*<div id={'terceiro-texto'}>*/}
            {/*    <p>Compreendemos que quando acontecem problemas com seus computadores*/}
            {/*        você*/}
            {/*        ou*/}
            {/*        sua empresa pode ficar sem produzir e perder dinheiro. Portanto procuramos*/}
            {/*        atender e solucionar seus problemas o mais rápido possível para que sua produtividade volte ao*/}
            {/*        normal.</p>*/}

            {/*    <img id={'terceira-imagem'} src={terceiraImagem}/>*/}
            {/*</div>*/}

            {/*/!*======================================Fim dos textos Sobre a empresa======================================*!/*/}


            {/*======================================Inicio do Rodapé======================================*/}

            <footer className={'container col-12 pt-4 footer bg-dark text-light text-center '} id={'rodape-home'}>

                {/*<container className={'container d-flex justify-content-around'} id={'rodape-servicos'}>*/}

                {/*<dl>Serviços*/}
                {/*    <dt><br/>Montagem e manutenção de computadores</dt>*/}
                {/*    <dt><br/>Criação de sites e aplicativos</dt>*/}
                {/*    <dt><br/>Design e criação de banners</dt>*/}
                {/*</dl>*/}

                {/*</container>*/}
                {/*======================================Redes sociais======================================*/}

                <div className={'container col-12 col-lg-4 d-flex justify-content-around'} id={'rodape-rede-social'}>

                    <img id={'facebook'} src={Facebook}/>
                    <img id={'instagram'} src={Instagram}/>
                    <img id={'google'} src={Google}/>
                    <img id={'linkedin'} src={Linkedin}/>
                    <img id={'whatsapp'} src={Whatsapp}/>

                </div>
                {/*======================================Downloads======================================*/}

                {/*<div className={'container justify-content-around'} id={'rodape-downloads'}>*/}

                {/*<p>Downloads</p>*/}
                {/*    <img id={'rodape-baixar-icon'} src={Baixar}/>*/}

                {/*</div>*/}

                {/*<div className={'container justify-content-around'} id={'rodape-mais-informacoes'}>*/}
                {/*<p >Mais informações</p>*/}

                {/*<img id={'rodape-email-icon'} src={Email}/>*/}

                {/*<p id={'rodape-email'}>contact@contactus.com.br</p>*/}

                {/*<img id={'rodape-telefone-icon'} src={Telefone}/>*/}

                {/*<p id={'rodape-telefone'}>(34) 3232-3232</p>*/}

                {/*</div>*/}
                {/*<p id={'rodape-empresa'}>&copy; 2020 Tech Center 99.999.999/9999-99</p>*/}
            </footer>

            {/*======================================Fim do rodape======================================*/}

        </section>

    );
}

export default Home;
