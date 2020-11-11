import React from 'react';
import './cliente.css'
import {Link} from "react-router-dom";
import Nav from "reactstrap/es/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

import ImgPerfil from "../../assets/perfil.png";
import ImgManu from "../../assets/manutencao-computadores-notebooks-sjc.png";
import ImgSite from "../../assets/criação-sites-desenvolvimento-sites-2.svg";
import ImgDesign from "../../assets/Vector.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import Baixar from "../../assets/baixar.png";
import Email from "../../assets/email.png";
import Telefone from "../../assets/telefone.png";

const Cliente = props => {

    return (
        <div>
        <Nav id={'cabecalho-cliente'}>
            <Link id={'empresa-cabecalho-cliente'} to="/"><b>Tech Center</b></Link>
            <img id={'perfil-cliente'} src={ImgPerfil}/>
        </Nav>
        <header id={'header-cliente'}>
            <h1 id={'titulo-cliente'}>Bem vindo, quais dos nossos serviços você deseja?</h1>

            <div id={'servicos-cliente'}>

                <div id={'caixa-manutencao-cliente'}>
                <img id={'manutencao-cliente'} src={ImgManu}/>
                <p id={'texto-manutencao-cliente'}>Montagem e manutenção<br/> de computadores</p>
                </div>

                <div id={'caixa-site-cliente'}>
                <img id={'site-cliente'} src={ImgSite}/>
                <p id={'texto-site-cliente'}>Criação de sites e aplicativos</p>
                </div>

                <div id={'caixa-design-cliente'}>
                <img id={'design-cliente'} src={ImgDesign}/>
                <p id={'texto-design-cliente'}>Design e criação de banners</p>
                </div>

            </div>

        </header>

            <footer id={'rodape-cliente'}>

            <dl id={'rodape-servicos-cliente'}>Serviços
                <dt><br/>Montagem e manutenção de computadores</dt>
                <dt><br/>Criação de sites e aplicativos</dt>
                <dt><br/>Design e criação de banners</dt>

            </dl>

            <img id={'rodape-instagram-icon-cliente'} src={Instagram}/>
            <img id={'rodape-facebook-icon-cliente'} src={Facebook}/>
            <img id={'rodape-whatsapp-icon-cliente'} src={Whatsapp}/>
            <img id={'rodape-baixar-icon-cliente'} src={Baixar}/>


            <dl id={'rodape-rede-social-cliente'}>Redes Sociais
                <dt id={'rodape-instagram-cliente'}><br/>Instagram</dt>
                <dt id={'rodape-facebook-cliente'}><br/>Facebook</dt>
                <dt id={'rodape-whatsapp-cliente'}><br/>Whatsapp</dt>
            </dl>

            <p id={'rodape-downloads-cliente'}>Downloads</p>
            <p id={'rodape-mais-informacoes-cliente'}>Mais informações</p>

            <img id={'rodape-email-icon-cliente'} src={Email}/>

            <p id={'rodape-email-cliente'}>contact@contactus.com.br</p>

            <img id={'rodape-telefone-icon-cliente'} src={Telefone}/>

            <p id={'rodape-telefone-cliente'}>(34) 3232-3232</p>
            <p id={'rodape-empresa-cliente'}>&copy; 2020 Tech Center 99.999.999/9999-99</p>
        </footer>
        </div>
            );

}
export default Cliente;
