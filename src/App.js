import { I18n } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
//import { AmplifySignOut } from '@aws-amplify/ui-react-v1';
import React from 'react'
import {
  //        Divider, 
  translations,
  withAuthenticator,
  //        Button, 
  //        Heading, 
  //        Flex, 
  //        ButtonGroup 
} from '@aws-amplify/ui-react';
import Pantalla2 from './Componentes/Pantallas/Pantalla2';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

// Configurar a Lenguaje Espanol
I18n.putVocabularies(translations);
I18n.setLanguage('es');

function App({ signOut, user }) {

  return (
    <div className='App'>
      <Pantalla2 user={user} signOut={signOut} />
    </div>
  );

}
export default withAuthenticator(App);


