import React from 'react';

const LoginPage = props => {

    return(

      <div>
        <h1>Teste, {props.nome}</h1>
          {props.children}
      </div>

    );
}

export default LoginPage;
