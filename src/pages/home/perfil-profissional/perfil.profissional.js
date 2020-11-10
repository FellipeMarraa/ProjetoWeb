import React, {useState} from 'react';
import './perfil.profissional.css';
import {useHistory} from "react-router-dom";
import Nav from "reactstrap/es/Nav";
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import IconUser from '../../../assets/iconeuser.png';
import Form from "reactstrap/lib/Form";
import Input from "reactstrap/lib/Input";
import ImageUploader from "react-images-upload";
import Button from "reactstrap/es/Button";



const PerfilProfissional = props =>  {

    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [cnpjEmpresa, setCnpjEmpresa] = useState("");
    const [nomeServico, setNomeServico] = useState("");
    const [valorServico, setValorServico] = useState("");
    const [categoriaServico, setCategoriaServico] = useState("");
    const [servicoAtivo, setServicoAtivo] = useState("");

    const formData = new FormData();
    const [pictures, setPictures] = useState();
    const history = useHistory();

    const routeChange = (name) => {
        let path = '/'.concat(name);
        history.push(path);
    }

    async function cadastroCategoria() {
        formData.append('image', pictures[0]);
        formData.append('descricao', "nova descricao");
        formData.append('categoria', " nova categoria");

        try {
            console.log("passou aqui")
            let options = {
                method: 'POST',
                headers: {
                    'Acces-Control-Allow-Origin': '*'
                },
                body: formData
            }
            delete options.headers['Content-Type'];
            let retorno = await fetch('http://localhost:5000/services', options);
        } catch (error) {
            console.error(error);
        }
    }

    const onDrop = picture => {
        setPictures(picture);
    };

    // async function efetuarCadastro() {
    //
    //     try {
    //
    //         let retorno = await fetch('http://localhost:5000/users/cadastro', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': '*'
    //             },
    //
    //             body: JSON.stringify(
    //                 {
    //                     login: login,
    //                     senha: senha,
    //                     nome: nome,
    //                     tipo: tipo,
    //                     cpf: cpf
    //                 }
    //             )
    //         });
    //
    //         let json = await retorno.json();
    //
    //         localStorage.setItem('token', json.token);
    //
    //         console.log(localStorage.getItem("token"));
    //
    //         if (json.tipo) {
    //             routeChange(json.tipo);
    //         } else {
    //             alert("Usuario nao autorizado")
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return(
        <div className={'container-fluid p-0'}>
            <Nav className={'navbar navbar-expand-md'} id={'cabecalho-perfil-profissional'}>

                <a className={'navbar-brand'} id={'empresa-cabecalho-perfil-profissional'}>
                    <b>Tech Center</b></a>

                <img id={'icon-cabecalho-perfil-profissional'} src={IconUser}/>
            </Nav>

            {/*Fim do nav*/}

            <div className={'container-fluid'} id={'cadastrar-servico-perfil-profissional'}>
                <Form id={'formulario-servicos-perfil-profissional'}>

                    <h2 id={'titulo-empresa-perfil-profissional'}>Dados da empresa</h2>

                    <Input className={'form-control'} id={'nome-empresa-perfil-profissional'} required={true} value={nomeEmpresa} type={'search'} name="Nome Empresa"
                           placeholder={'Razão Social:'} maxLength={256}
                           onChange={(textNomeEmpresa) => setNomeServico(textNomeEmpresa.target.value)}/>

                    <Input className={'form-control'} id={'cnpj-empresa-perfil-profissional'} required={true} value={cnpjEmpresa} type={'text'} name="Cpnj Empresa"
                           placeholder={'CNPJ/CPF da empresa: '}
                           onChange={(textCnpjEmpresa) => setValorServico(textCnpjEmpresa.target.value)}/>

                    <h2 id={'titulo-formulario-perfil-profissional'}>Dados do serviço</h2>

                    <Input className={'form-control'} id={'nome-servico-perfil-profissional'} required={true} value={nomeServico} type={'search'} name="Nome Servico"
                           placeholder={'Nome do Servico:'} maxLength={256}
                           onChange={(textNomeServico) => setNomeServico(textNomeServico.target.value)}/>

                    <Input className={'form-control'} id={'valor-servico-perfil-profissional'} required={true} value={valorServico} type={'number'} name="Valor Servico"
                           placeholder={'Valor do servico: '}
                           onChange={(textValorServico) => setValorServico(textValorServico.target.value)}/>

                    <select required={true} value={categoriaServico} id={'categoria-servico-perfil-profissional'}
                            onChange={(textCategoriaServico) => setCategoriaServico(textCategoriaServico.target.value)}>
                        <option value="Selecione uma opcao">Selecione uma categoria</option>
                        <option value="Manutenção">Manutenção</option>
                        <option value="Design">Design</option>
                        <option value="Sites">Sites</option>
                    </select>

                </Form>

                <div className={'container-fluid'} id={'image-uploader-perfil-profissional'}>

                    <h2 id={'titulo-cadastrar-servicos'}> Cadastre uma imagem para seu serviço</h2>

                    <ImageUploader
                        withIcon={true}
                        buttonText={'Choose Image'}
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.jpeg']}>
                    </ImageUploader>

                    <Button id={'button'} onClick={cadastroCategoria}> enviar</Button>
                </div>

                <Button id={'button-cadastrar'}> Cadastrar Serviço</Button>

            </div>

        </div>
    );
}
export default PerfilProfissional;
