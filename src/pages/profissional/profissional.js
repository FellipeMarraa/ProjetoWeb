import React, {useState} from 'react';
import './profissional.css'
import {Link} from "react-router-dom";
import Nav from "reactstrap/es/Nav";
import {Chart} from "react-google-charts";

import Imgperfil from "../../assets/mdi_person.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import Baixar from "../../assets/baixar.png";
import Email from "../../assets/email.png";
import Telefone from "../../assets/telefone.png";

function Profissional() {

        const [options, setOptions] = useState({title: 'Faturamento da empresa GSI Informática'})
        const [data, setData] = useState([
            ['Mes', 'Faturamento'],
            ['Janeiro', 0],
            ['Fevereiro', 20],
            ['Março', 30],
            ['Abril', 40],
            ['Maio', 50],
            ['Junho', 60],
            ['Julho', 40],
            ['Agosto', 70],
            ['Setembro', 30],
            ['Outubro', 80],
            ['Novembro', 100],
            ['Dezembro', 90],
        ])

    return (
        <body>
        <Nav id={'cabecalho-profissional'}>
            <Link id={'empresa-cabecalho'} to="/"><b>Tech Center</b></Link>
            {/*<img id={'notificacao'} src={}/>*/}
            <img id={'perfil'} src={Imgperfil}/>
        </Nav>
        <header id={'header'}>
            <div id={'servicos'}>
                <Chart width={'1550px'} height={'500px'} chartType="LineChart" data={data} options={options}/>

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
export default Profissional;
