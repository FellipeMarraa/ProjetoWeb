import React from 'react';
import './landingPage.css';
import {Link} from "react-router-dom";

import imageHeader from '../../assets/imageHeader.png';
import etiqueta from '../../assets/mdi_loyalty.png';
import primeiraImagem from '../../assets/hide-the-pain-stockphoto-840x560 1.png';
import segundaImagem from '../../assets/tela-azul-da-morte-windows-10.jpg';
import terceiraImagem from '../../assets/1024px-Running_icon_-_Noun_Project_17825.svg.png';
import menu from '../../assets/menu.svg';

const LandingPage = props => {

    return (
        <div>
            <header>
                <div className={'cabecalho-landing'}>
                    <img id={'menu-landing'} src={menu}/>
                    <h2 id={'empresa-landing'}>Tech Center</h2>
                    <Link to='./Components/CadastroPage'> <a id={'cadastre-landing'}>Cadastre-se</a></Link>
                    <Link to='./Components/LoginPage'><a id={'login-landing'}>Login</a></Link>
                </div>
            </header>

            <div className={'assistencia-landing'}>
                <p id={'titulo-landing'}>Assistência Técnica</p>
                <img id={'icone-landing'} src={imageHeader}/>
            </div>

            <p id={'contrate-landing'}>Contrate nossos serviços </p> <img id={'etiqueta-landing'} src={etiqueta}/>

            <div className={'texto-landing'}>
                <p id={'primeiro-texto-landing'}>A Empresa oferece Assistência Técnica em Informática para manutenção de
                    computadores
                    e notebooks, criação de sites/aplicativos e quaisquer outras
                    necessidades relacionadas à tecnologia. A Empresa presta serviços de assistência técnica em
                    informática
                    baseada em vasta experiência no ramo, sempre com garantia, segurança e
                    alta qualidade, para empresas e residências em Uberlândia.
                </p>
                <img id={'primeira-imagem-landing'} src={primeiraImagem}/>
                <img id={'segunda-imagem-landing'} src={segundaImagem}/>
                <p id={'segundo-texto-landing'}>Seja qual for o problema apresentado pelo seu computador, temos a
                    certeza que
                    podemos apresentar uma solução. Vamos até a sua empresa ou residência, sanando
                    o defeito no local. Nosso objetivo é sempre deixar nossos clientes plenamente satisfeitos, pois
                    nossa melhor propaganda é a própria indicação deles.
                    Procuramos sempre indicar qual a melhor solução quando você deseja fazer um upgrade do seu
                    computador atual ou a aquisição de um novo equipamento, seja computador, notebook ou
                    periféricos, como roteadores, modems, memórias, monitores, processadores, etc.
                </p>
                <p id={'terceiro-texto-landing'}>Compreendemos que quando acontecem problemas com seus computadores você
                    ou
                    sua empresa pode ficar sem produzir e perder dinheiro. Portanto procuramos
                    atender e solucionar seus problemas o mais rápido possível para que sua produtividade volte ao
                    normal. Também procuramos orientá-lo para uma melhor utilização de seus
                    computadores e programas para diminuir a ocorrência de contratempos.</p>
                <img id={'terceira-imagem-landing'} src={terceiraImagem}/>
            </div>

            <footer className={'rodape-landing'}>
                <p>&copy; Quer falar com nóis só chamar no zap (34) 9 9999-9999</p>
            </footer>

        </div>
    );
}

export default LandingPage;
