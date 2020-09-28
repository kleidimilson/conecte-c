import React from 'react';
import chaveVerde from '../../assets/chave-verde.svg';
import logo from '../../assets/imagem-logo.svg'
import cpf from '../../assets/cpf.svg'
import novaSenha from '../../assets/nova-senha.svg';
import './novaSenha.css';
import seta from '../../assets/seta.svg'
import primeiroAcesso from '../../assets/primeiro-acesso.svg'
import interrogacao from '../../assets/interrogacao.svg'
import setaBaixo from '../../assets/setabaixo.svg'
import {Link} from 'react-router-dom'

function Novasenha() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-itens">
          <img src={chaveVerde} alt="icone"/>
          <h4>Esqueci a Senha</h4>
        </div>
        <img src={logo} width={60} alt="icone"/>
      </nav>
      <div className="header">
        <div className="cpf">
            <img src={cpf} className="img-cpf" alt="cpf"/>
            <input type="number" />
        </div>
            <div className="novaSenha-area">
                <Link>
                <img className="nova-senha" src={novaSenha}  alt="esquecisenha"/>
                </Link>
            </div>
        <div className="seta">
            <div className="setaArea">
                Voltar
                <img src={seta} alt="seta"/>
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
          <div className="item-footer">
              Perguntas Frequentes
              <img src={setaBaixo} alt="seta"/>
          </div>
        </div>
     </div>
    </div>
  );
}

export default Novasenha;
