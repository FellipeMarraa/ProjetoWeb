import React, {useState} from 'react';
import './perfil.cliente.css';
// import ImageUploader from 'react-images-upload';

// function Upload() {
//     const formData = new FormData();
//     const [pictures, setPictures] = useState();
//
//     async function cadastroCategoria() {
//         formData.append('image', pictures[0]);
//         formData.append('descricao', "teste");
//         formData.append('categoria', "categoria teste");
//
//         try {
//             console.log("passou aqui")
//             let options = {
//                 method: 'POST',
//                 headers: {
//                     'Acces-Control-Allow-Origin': '*'
//                 },
//                 body: formData
//             }
//             delete options.headers['Content-Type'];
//             let retorno = await fetch('http://localhost:5000/services', options);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//
//     const onDrop = picture => {
//         setPictures(picture);
//     };
// }
function PerfilCliente(){
    return(
        <div>

            <h1>Teste cliente</h1>

        </div>
    );
}
export default PerfilCliente;
