import React from 'react';
import chaveVerde from '../../assets/chave-verde.svg';
import logo from '../../assets/imagem-logo.svg'
import cpf from '../../assets/cpf.svg'
import senha from '../../assets/senha.svg';
import orelha from '../../assets/orelha.svg';
import './login.css';

import primeiroAcesso from '../../assets/primeiro-acesso.svg'
import interrogacao from '../../assets/interrogacao.svg'
import setaBaixo from '../../assets/setabaixo.svg'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-item">
          <h4>CONECTE-C</h4>
          <img src={logo} width={50} alt="icone"/>
       
        </div>
        
        <img src={orelha} width={40} alt="icone"/>
      </nav>
      <div className="header">
        <div className="cpf">
            <img src={cpf} className="img-cpf" alt="cpf"/>
            <input type="number" />
        </div>
            <div className="novaSenha-area">
                <Link to="/dashboard">
                <img className="nova-senha" src={senha}  alt="esquecisenha"/>
                </Link>
            </div>
        <div className="seta">
            <div className="setaArea">
                Esqueceu a senha?
                <img src={chaveVerde} width={50} alt="seta"/>
            </div>
        </div>
     </div>
     <div className="footer">
       <div className="itens">
          <div className="item-footer">
              Primeiro Acesso
              <img  src={primeiroAcesso} alt="primeiroacesso"/>
          </div>
          <div className="item-footer">
              Ajuda
              <img src={interrogacao} alt="interrogaçao"/>
          </div>
          <Link to="/perguntas">
          <div className="item-footer">
              Perguntas Frequentes
              <img src={setaBaixo} alt="seta"/>
          </div>
          </Link>
        </div>
     </div>
    </div>
  );
}

export default Login;
