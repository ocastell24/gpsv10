//import logo from './logo.svg';
import { I18n } from 'aws-amplify';
//import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
//import awsconfig from './aws-exports';
import { AmplifySignOut} from '@aws-amplify/ui-react-v1';
import React from 'react'
import { Divider, translations,withAuthenticator , Button, Heading, Flex, ButtonGroup } from '@aws-amplify/ui-react';

import awsExports from "./aws-exports";

Amplify.configure(awsExports);
// Configurar a Lenguaje Espanol
I18n.putVocabularies(translations);
I18n.setLanguage('es');

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  mainContainer: { paddingTop: '150px' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' },
  btnSign: { textAlign: 'right' }
}

function App({ signOut, user }) {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        wrap="wrap">
        <Heading level={4}>Hola {user.username}</Heading>
        <Button style={styles.btnSign} onClick={signOut}>Salir</Button>
      </Flex>

      <Flex direction="column">
        <Divider
          size="large"
          orientation="horizontal"
        />
      </Flex>
      {/* Add Todo JSX here  */
        <div style={styles.mainContainer}>
          <ButtonGroup
            variation='primary'
            size="large"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              onClick={() => alert('Implementar la pagina Flota.')}>
              Flota</Button>
            <Button
              onClick={() => alert('Implementar la pagina Vehiculo.')}>
              Vehiculo</Button>
            <Button
              onClick={() => alert('Implementar la pagina Reportes.')}
            >Reportes</Button>
          </ButtonGroup>
        </div>
      }
    </>
  );
}

export default withAuthenticator(App);
