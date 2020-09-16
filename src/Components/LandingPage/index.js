import React from 'react';
import './landingPage.css';
import imageHeader from '../../assets/imageHeader.png';
import etiqueta from '../../assets/mdi_loyalty.png';
import primeiraImagem from '../../assets/hide-the-pain-stockphoto-840x560 1.png';
import segundaImagem from '../../assets/tela-azul-da-morte-windows-10.jpg';
import terceiraImagem from '../../assets/1024px-Running_icon_-_Noun_Project_17825.svg.png';

const LandingPage = props => {

    return (
        <div>
            <header>
                <div className={'cabecalho'}>
                    <h2 id={'logo'}>Logo</h2>
                    <h2 id={'empresa'}>Empresa</h2>
                    <a id={'cadastre'}>Cadastre-se</a>
                    <a id={'login'}>Login</a>
                </div>
            </header>

            <div className={'assistencia'}>
                <p id={'titulo'}>Assistência Técnica</p>
                <img id={'icone'} src={imageHeader}/>
            </div>

            <p id={'contrate'}>Contrate nossos serviços </p> <img id={'etiqueta'} src={etiqueta}/>

            <div className={'texto'}>
                <p id={'primeiro-texto'}>A Empresa oferece Assistência Técnica em Informática para manutenção de
                    computadores
                    e notebooks, criação de sites/aplicativos e quaisquer outras
                    necessidades relacionadas à tecnologia. A Empresa presta serviços de assistência técnica em
                    informática
                    baseada em vasta experiência no ramo, sempre com garantia, segurança e
                    alta qualidade, para empresas e residências em Uberlândia.
                </p>
                <img id={'primeira-imagem'} src={primeiraImagem}/>
                <img id={'segunda-imagem'} src={segundaImagem}/>
                <p id={'segundo-texto'}>Seja qual for o problema apresentado pelo seu computador, temos a certeza que
                    podemos apresentar uma solução. Vamos até a sua empresa ou residência, sanando
                    o defeito no local. Nosso objetivo é sempre deixar nossos clientes plenamente satisfeitos, pois
                    nossa melhor propaganda é a própria indicação deles.
                    Procuramos sempre indicar qual a melhor solução quando você deseja fazer um upgrade do seu
                    computador atual ou a aquisição de um novo equipamento, seja computador, notebook ou
                    periféricos, como roteadores, modems, memórias, monitores, processadores, etc.
                </p>
                <p id={'terceiro-texto'}>Compreendemos que quando acontecem problemas com seus computadores você ou
                    sua empresa pode ficar sem produzir e perder dinheiro. Portanto procuramos
                    atender e solucionar seus problemas o mais rápido possível para que sua produtividade volte ao
                    normal. Também procuramos orientá-lo para uma melhor utilização de seus
                    computadores e programas para diminuir a ocorrência de contratempos.</p>
                <img id={'terceira-imagem'} src={terceiraImagem}/>
            </div>

            <footer className={'rodape'}>
                <p>&copy; Quer falar com nóis só chamar no zap (34) 9 9999-9999</p>
            </footer>

        </div>
    );
}

export default LandingPage;
