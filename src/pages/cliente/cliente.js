import React from 'react';
import './cliente.css'
import {Link} from "react-router-dom";
import Nav from "reactstrap/es/Nav";

import Imgperfil from "../../assets/mdi_person.png";
import Imgmanu from "../../assets/manutencao-computadores-notebooks-sjc.png";
import Imgsite from "../../assets/criação-sites-desenvolvimento-sites-2.svg";
import Imgdesign from "../../assets/Vector.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import Baixar from "../../assets/baixar.png";
import Email from "../../assets/email.png";
import Telefone from "../../assets/telefone.png";

const User = props => {

    return (
        <body>
        <Nav id={'cabecalho'}>
            <Link id={'empresa-cabecalho'} to="/"><b>Tech Center</b></Link>
            <img id={'perfil'} src={Imgperfil}/>
        </Nav>
        <header id={'header'}>
            <h1 id={'titulo'}>Bem vindo, quais dos nossos serviços você deseja?</h1>

            <div id={'servicos'}>

                <div id={'caixa-manutencao'}>
                <img id={'manutencao'} src={Imgmanu}/>
                <p id={'texto-manutencao'}>Montagem e manutenção<br/> de computadores</p>
                </div>

                <div id={'caixa-site'}>
                <img id={'site'} src={Imgsite}/>
                <p id={'texto-site'}>Criação de sites e aplicativos</p>
                </div>

                <div id={'caixa-design'}>
                <img id={'design'} src={Imgdesign}/>
                <p id={'texto-design'}>Design e criação de banners</p>
                </div>

            </div>

        </header>

            <footer id={'rodape'}>

            <dl id={'rodape-servicos'}>Serviços
                <dt><br/>Montagem e manutenção de computadores</dt>
                <dt><br/>Criação de sites e aplicativos</dt>
                <dt><br/>Design e criação de banners</dt>

            </dl>

            <img id={'rodape-instagram-icon'} src={Instagram}/>
            <img id={'rodape-facebook-icon'} src={Facebook}/>
            <img id={'rodape-whatsapp-icon'} src={Whatsapp}/>
            <img id={'rodape-baixar-icon'} src={Baixar}/>


            <dl id={'rodape-rede-social'}>Redes Sociais
                <dt id={'rodape-instagram'}><br/>Instagram</dt>
                <dt id={'rodape-facebook'}><br/>Facebook</dt>
                <dt id={'rodape-whatsapp'}><br/>Whatsapp</dt>
            </dl>

            <p id={'rodape-downloads'}>Downloads</p>
            <p id={'rodape-mais-informacoes'}>Mais informações</p>

            <img id={'rodape-email-icon'} src={Email}/>

            <p id={'rodape-email'}>contact@contactus.com.br</p>

            <img id={'rodape-telefone-icon'} src={Telefone}/>

            <p id={'rodape-telefone'}>(34) 3232-3232</p>
            <p id={'rodape-empresa'}>&copy; 2020 Tech Center 99.999.999/9999-99</p>
        </footer>
        </body>
            );

}
export default User;
