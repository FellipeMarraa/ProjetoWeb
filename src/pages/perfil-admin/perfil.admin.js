import React, {useState} from 'react';
import './perfil.admin.css';
import ImageUploader from 'react-images-upload';
import Button from "reactstrap/es/Button";
import {useHistory} from "react-router-dom";

function PerfilCliente() {
    const formData = new FormData();
    const [pictures, setPictures] = useState();
    const history = useHistory();

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

    return (
        <div>

            <ImageUploader
            withIcon={true}
            buttonText={'Choose Image'}
            onChange={onDrop}
            imgExtension={['.jpg', '.gif', '.png']}>
            </ImageUploader>

            <Button onClick={cadastroCategoria}> enviar</Button>

        </div>
    );
}
export default PerfilCliente;

const onDrop = picture => {
    setPictures(picture);
};