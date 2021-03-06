import React from 'react';
import ajuda from '../../assets/ajuda.svg';
import direitos from '../../assets/direitos.svg'
import home from '../../assets/home.svg'
import calendario from '../../assets/calendario.svg';
import orelha from '../../assets/orelha.svg';
import './dashboard.css';
import img from '../../assets/img.PNG';
import sino from '../../assets/sino.svg'

import bomdia from '../../assets/bomdia.svg'

function Dashboard() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-itens">
            
            <img src={bomdia} alt="bom dia"/>
            <h4>Maria Antônia</h4>
        </div>
        
        <img src={orelha} width={30} alt="icone"/>
        <img src={sino} width={30} alt="icone"/>
      </nav>
      <div className="header">
        <div className="cpf">
            <img src={home} className="img-cpf" alt="cpf"/>
        
        </div>
        <div className="calendario">
            <img src={calendario} alt=""/>
            <div>
                <div>
                    <img src={direitos} alt="" />
                    Meus Direitos
                </div>
                <div>
                    <img src={ajuda} alt=""/>
                    Posso te ajudar 
                </div>
            </div>
        </div>
        <div className="footer">
             DETALHAMENTO
             <img src={img} width={200} alt=""/>
        </div>

       
        
     </div>
    
    </div>
  );
}

export default Dashboard;
