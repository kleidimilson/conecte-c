import React from 'react';
import Imagem from '../../assets/perguntas.svg'
import './style.css'
import {Link} from 'react-router-dom'

// import { Container } from './styles';

const perguntas = () => {
  return (
        
           <Link to="/chatbot"><img className="imagem" src={Imagem} alt=""/></Link>
        
  )
}

export default perguntas;