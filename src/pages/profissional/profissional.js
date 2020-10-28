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

            document.getElementById('servicos-profissional');

            if (servicos == false) {
                document.getElementById("servicos-profissional").style.display = "none";
            } else if (servicos == true) {
                document.getElementById("servicos-profissional").style.display = "block";
                return setVisualizacao(false), setFaturamento(false);
            }


        }, //efeito

        [servicos] // gatilho

    );

    useEffect(()=>{

            document.getElementById('faturamentos-profissional');

            if (faturamento == false){
                document.getElementById("faturamentos-profissional").style.display = "none";
            }else
            if (faturamento  == true){
                document.getElementById("faturamentos-profissional").style.display = "block";
                return setServicos(false), setVisualizacao(false);
            }

        }, //efeito

        [faturamento] // gatilho

    );

    useEffect(() => {

            document.getElementById('visualizacao-profissional');

            if (visualizacao == false) {
                document.getElementById("visualizacao-profissional").style.display = "none";
            } else if (visualizacao == true) {
                document.getElementById("visualizacao-profissional").style.display = "block";
                return setServicos(false), setFaturamento(false);
            }

        }, //efeito

        [visualizacao] // gatilho

    );

    return (
        <body>
        <Nav id={'cabecalho-profissional'}>
            <Link id={'empresa-cabecalho-profissional'} to="/"><b>Tech Center</b></Link>
            <img id={'alert-img-profissional'} src={ImgAlert}/>
            <img id={'perfil-img-profissional'} src={ImgPerfil}/>
        </Nav>
        <header id={'header-profissional'}>

            <div id={'botoes-profissional'}>
                <Button id={'botao-servicos-profissional'} onClick={() => {
                    setServicos(true);
                    if (servicos == true) {
                        setServicos(false);
                    }
                }}> Serviços </Button>
                <Button id={'botao-faturamento-profissional'} onClick={() => {
                    setFaturamento(true);
                    if (faturamento == true) {
                        setFaturamento(false);
                    }
                }}> Faturamento </Button>
                <Button id={'botao-visualizacao-profissional'} onClick={() => {
                    setVisualizacao(true);
                    if (visualizacao == true) {
                        setVisualizacao(false);
                    }
                }}> Visualizações </Button>
            </div>

            <div id={'faturamentos-profissional'}>
                <Chart width={'1550px'} height={'500px'} chartType="LineChart" data={dataFaturamento} options={graficoFaturamento}/>
            </div>

            <div id={'servicos-profissional'}>
                <Chart width={'1550px'} height={'500px'} chartType="PieChart" data={dataServicos} options={graficoServicos}/>
            </div>

            <div id={'visualizacao-profissional'}>
                <Chart width={'1550px'} height={'500px'} chartType="BarChart" data={dataVisualizacoes} options={graficoVisualizacoes}/>
            </div>
        </header>

        <footer id={'rodape-profissional'}>

            <dl id={'rodape-servicos-profissional'}>Serviços
                <dt><br/>Montagem e manutenção de computadores</dt>
                <dt><br/>Criação de sites e aplicativos</dt>
                <dt><br/>Design e criação de banners</dt>

            </dl>

            <img id={'rodape-instagram-icon-profissional'} src={Instagram}/>
            <img id={'rodape-facebook-icon-profissional'} src={Facebook}/>
            <img id={'rodape-whatsapp-icon-profissional'} src={Whatsapp}/>
            <img id={'rodape-baixar-icon-profissional'} src={Baixar}/>


            <dl id={'rodape-rede-social-profissional'}>Redes Sociais
                <dt id={'rodape-instagram-profissional'}><br/>Instagram</dt>
                <dt id={'rodape-facebook-profissional'}><br/>Facebook</dt>
                <dt id={'rodape-whatsapp-profissional'}><br/>Whatsapp</dt>
            </dl>

            <p id={'rodape-downloads-profissional'}>Downloads</p>
            <p id={'rodape-mais-informacoes-profissional'}>Mais informações</p>

            <img id={'rodape-email-icon-profissional'} src={Email}/>

            <p id={'rodape-email-profissional'}>contact@contactus.com.br</p>

            <img id={'rodape-telefone-icon-profissional'} src={Telefone}/>

            <p id={'rodape-telefone-profissional'}>(34) 3232-3232</p>
            <p id={'rodape-empresa-profissional'}>&copy; 2020 Tech Center 99.999.999/9999-99</p>
        </footer>
        </body>
    );

}
export default Profissional;
