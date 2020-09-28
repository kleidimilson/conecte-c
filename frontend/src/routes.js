import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import novaSenha from './pages/novaSenha/novaSenha';
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Perguntas from './pages/perguntas/perguntas'
import chatbot from './pages/chatbot/chatbot'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/nova-senha" component={novaSenha} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/perguntas" component={Perguntas}/>
                <Route path="/chatbot" component={chatbot}/>
               
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;