import React, {useState} from 'react';
import './perfil.profissional.css';
import Nav from "reactstrap/es/Nav";
import Form from "reactstrap/es/Form";
import {useHistory} from "react-router-dom";

function PerfilProfissional(){

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [cpf, setCpf] = useState("");
    const history = useHistory();

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



    return(
        <section className={'container-fluid p-0'}>
            <Nav className={'navbar navbar-expand-md'} id={'cabecalho'}>

                <a className={'navbar-brand'} id={'empresa-cabecalho'}>
                    <b>Tech Center</b></a>

            </Nav>


            {/*/!*======================================Começo do Header======================================================*!/*/}

            <section className={'container-fluid col-12 d-flex justify-content-around'} id={'header'}>

                <div id={'caixa-cadastro-empresa'}>

                    <div id={'textoFormulario-empresa'}>
                        <h2 id={'tituloForm'}><b> Painel da empresa </b></h2>
                    </div>

                    <Form id={'formulario-cadastro'}>

                        <input className={'form-control'} id={'email-cadastro'} required={true} value={login} type={'email'} name="email"
                               placeholder={'Email: '} maxLength={256}
                               onChange={(textLogin) => setLogin(textLogin.target.value)}/>

                        <input id={'senha-cadastro'} required={true} value={senha} type={'password'} name="senha"
                               placeholder={'Senha: '} maxLength={256} onChange={(textSenha) => {
                            setSenha(textSenha.target.value);
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

                </div>


                {/*    /!*======================================Formulario de Cadastro======================================*!/*/}



                {/*</div>*/}

                {/*======================================Fim do formulário======================================*/}
            </section>
        </section>
    );
}
export default PerfilProfissional;
