//import logo from './logo.svg';
import { I18n } from 'aws-amplify';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
//import awsconfig from './aws-exports';
import { AmplifySignOut } from '@aws-amplify/ui-react-v1';
import React, { Component } from 'react'
import { Divider, translations, withAuthenticator, Button, Heading, Flex, ButtonGroup } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";
import Pantalla2 from './Componentes/Pantallas/Pantalla2';


Amplify.configure(awsExports);
// Configurar a Lenguaje Espanol
I18n.putVocabularies(translations);
I18n.setLanguage('es');



function App({ signOut, user }) {
  return (
    <Pantalla2 user={ user }
               signOut={ signOut } />
  );
}

export default App;
