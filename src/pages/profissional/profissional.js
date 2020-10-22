import React, {useEffect, useState} from 'react';
import './profissional.css'
import {Link} from "react-router-dom";
import Nav from "reactstrap/es/Nav";
import {Chart} from "react-google-charts";

import ImgPerfil from "../../assets/perfil.png";
import ImgAlert from "../../assets/alert.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import Baixar from "../../assets/baixar.png";
import Email from "../../assets/email.png";
import Telefone from "../../assets/telefone.png";
import Button from "reactstrap/lib/Button";

function Profissional() {

    const [servicos, setServicos] = useState(true)
    const [faturamento, setFaturamento] = useState(false)
    const [visualizacao, setVisualizacao] = useState(false)

    const [graficoServicos, setGraficoServicos] = useState({title: 'Servicos da empresa GSI Informática'})
    const [dataServicos, setDataServicos] = useState([
        ['Mes', 'Servicos'],
        ['Janeiro', 50],
        ['Fevereiro', 20],
        ['Março', 30],

    ])

    const [graficoFaturamento, setGraficoFaturamento] = useState({title: 'Faturamento da empresa GSI Informática'})
    const [dataFaturamento, setDataFaturamento] = useState([
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

    const [graficoVisualizacoes, setGraficoVisualizacoes] = useState({title: 'Vizualizacoes da empresa GSI Informática'})
    const [dataVisualizacoes, setDataVisualizacoes] = useState([
        ['Mes', 'Visualizacoes'],
        ['Janeiro', 50],
        ['Fevereiro', 20],
        ['Março', 30],

    ])

    useEffect(() => {

            document.getElementById('servicos');

            if (servicos == false) {
                document.getElementById("servicos").style.display = "none";
            } else if (servicos == true) {
                document.getElementById("servicos").style.display = "block";
                return setVisualizacao(false), setFaturamento(false);
            }


        }, //efeito

        [servicos] // gatilho

    );

    useEffect(()=>{

            document.getElementById('faturamentos');

            if (faturamento == false){
                document.getElementById("faturamentos").style.display = "none";
            }else
            if (faturamento  == true){
                document.getElementById("faturamentos").style.display = "block";
                return setServicos(false), setVisualizacao(false);
            }

        }, //efeito

        [faturamento] // gatilho

    );

    useEffect(() => {

            document.getElementById('visualizacao');

            if (visualizacao == false) {
                document.getElementById("visualizacao").style.display = "none";
            } else if (visualizacao == true) {
                document.getElementById("visualizacao").style.display = "block";
                return setServicos(false), setFaturamento(false);
            }

        }, //efeito

        [visualizacao] // gatilho

    );

    return (
        <body>
        <Nav id={'cabecalho-profissional'}>
            <Link id={'empresa-cabecalho'} to="/"><b>Tech Center</b></Link>
            <img id={'alert-img'} src={ImgAlert}/>
            <img id={'perfil-img'} src={ImgPerfil}/>
        </Nav>
        <header id={'header'}>

            <div id={'botoes'}>
                <Button id={'botao-servicos'} onClick={() => {
                    setServicos(true);
                    if (servicos == true) {
                        setServicos(false);
                    }
                }}> Serviços </Button>
                <Button id={'botao-faturamento'} onClick={() => {
                    setFaturamento(true);
                    if (faturamento == true) {
                        setFaturamento(false);
                    }
                }}> Faturamento </Button>
                <Button id={'botao-visualizacao'} onClick={() => {
                    setVisualizacao(true);
                    if (visualizacao == true) {
                        setVisualizacao(false);
                    }
                }}> Visualizações </Button>
            </div>

            <div id={'faturamentos'}>
                <Chart width={'1550px'} height={'500px'} chartType="LineChart" data={dataFaturamento} options={graficoFaturamento}/>
            </div>

            <div id={'servicos'}>
                <Chart width={'1550px'} height={'500px'} chartType="PieChart" data={dataServicos} options={graficoServicos}/>
            </div>

            <div id={'visualizacao'}>
                <Chart width={'1550px'} height={'500px'} chartType="BarChart" data={dataVisualizacoes} options={graficoVisualizacoes}/>
            </div>
        </header>

        <footer id={'rodape-profissional'}>

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
