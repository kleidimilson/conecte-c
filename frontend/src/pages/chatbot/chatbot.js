import React from 'react';

// import { Container } from './styles';
import './styles.css'
const chatbot = () => {
  return (
        <div className="body">
            <iframe
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/270ac4cf-9e84-4418-a38b-e1f930534038%22%3E">
            </iframe>
        </div>
    )
}

export default chatbot;