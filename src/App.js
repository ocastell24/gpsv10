//import logo from './logo.svg';
import { I18n } from 'aws-amplify';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
//import awsconfig from './aws-exports';
import { AmplifySignOut } from '@aws-amplify/ui-react-v1';
import React from 'react'
import { Divider, translations, withAuthenticator, Button, Heading, Flex, ButtonGroup } from '@aws-amplify/ui-react';
import Pantalla2 from './Componentes/Pantallas/Pantalla2';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
// Configurar a Lenguaje Espanol
I18n.putVocabularies(translations);
I18n.setLanguage('es');

/*const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  mainContainer: { paddingTop: '150px' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
  btnSign: { textAlign: 'right' }
}*/

function App({ signOut, user }) {
  return (
    
      <Pantalla2 user={user}
        signOut={signOut} />
    
  );
}

export default withAuthenticator(App);

//export default App;
