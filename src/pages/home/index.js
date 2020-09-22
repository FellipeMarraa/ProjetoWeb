import React from 'react';
import './index.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

import imageHeader from '../../assets/imageHeader.png';
import primeiraImagem from '../../assets/hide-the-pain-stockphoto-840x560 1.png';
import segundaImagem from '../../assets/tela-azul-da-morte-windows-10.jpg';
import terceiraImagem from '../../assets/1024px-Running_icon_-_Noun_Project_17825.svg.png';


const LandingPage = props => {

    return (
        <div>
                <nav id={'cabecalho-landing'}>
                    <AnchorLink id={'home-landing'} href='#assistencia-landing'>Home</AnchorLink>
                    <AnchorLink id={'sobre-landing'} href='#servicos-landing'>Sobre</AnchorLink>
                    <AnchorLink id={'catalogo-landing'} href='#catalogo-landing'>Catálogo</AnchorLink>
                    <AnchorLink id={'contato-landing'} href='#rodape-landing'>Contato</AnchorLink>
                    <Link id={'empresa-landing'} to="/"><b>Tech Center</b></Link>
                   <Link id={'login-landing'} to="/login">Entrar</Link>
                    <Link id={'cadastre-landing'} to="/cadastro">Seja um profissional</Link>
                </nav>

            <header id={'assistencia-landing'}>
                <p id={'titulo-landing'}>Cadastre-se e trabalhe como autônomo <br/> para garantir uma renda extra</p>
                <img id={'icone-landing'} src={imageHeader}/>
            </header>

            <section id={'servicos-landing'}>
                <article id={'conheca-landing'}>Serviços oferecidos </article>

                <article id={'primeiro-texto-landing'}>A Tech Center oferece assistência técnica em informática para manutenção de
                    computadores
                    e notebooks, criação de sites/aplicativos e quaisquer outras
                    necessidades relacionadas à tecnologia.
                    Possuímos profissionais autônomos que prestam seus serviços sempre com garantia, segurança e
                    alta qualidade, para empresas e residências em Uberlândia.
                </article>
                <img id={'primeira-imagem-landing'} src={primeiraImagem}/>


                <img id={'segunda-imagem-landing'} src={segundaImagem}/>
                <article id={'segundo-texto-landing'}>Seja qual for o problema apresentado pelo seu computador, temos a
                    certeza que
                    podemos apresentar uma solução. Vamos até a sua empresa ou residência, sanando
                    o defeito no local.
                    Temos também profissionais que auxiliam na inovação do seu negócio através de criação de sites e aplicativos.

                </article>

                <article id={'terceiro-texto-landing'}>Compreendemos que quando acontecem problemas com seus computadores você
                    ou
                    sua empresa pode ficar sem produzir e perder dinheiro. Portanto, procuramos
                    atender e solucionar seus problemas o mais rápido possível para que sua produtividade volte ao
                    normal.</article>
                <img id={'terceira-imagem-landing'} src={terceiraImagem}/>
            </section>

            <div id={'catalogo-landing'}>

            </div>

            <footer id={'rodape-landing'}>
                <p>&copy; 2020  Tech Center  99.999.999/9999-99</p>
            </footer>

        </div>
    );
}

export default LandingPage;
