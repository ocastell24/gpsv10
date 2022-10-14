import { Loader, MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Link } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import {
  //    Divider, 
  //    translations, 
  withAuthenticator,
  Button,
  Heading,
  Flex,
  ButtonGroup,
  //    components 
} from '@aws-amplify/ui-react';

import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

function Pantalla23() {
  return (

      <div className='contenedor-Pantalla23'>
        <nav>
          <ol>
            <li>
            <Link to="/">Menu principal / </Link>
              <Link to="/Pantalla23">Reportes</Link>
            </li>
          </ol>
        </nav>

        <Flex
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                alignContent="center"
                wrap="wrap">


            </Flex>

        <ButtonGroup
                variation='primary'
                size="large"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
               <Link to="/pantalla231" style={{ textDecoration: 'none' }}>
                    <Button variation='primary'>
                        Reporte de Vehiculos</Button>
                </Link>

                <Link to="/pantalla232" style={{ textDecoration: 'none' }}>
                    <Button variation='primary'>
                        Reporte de alertas</Button>
                </Link>

               
            </ButtonGroup>

      </div>


  );
};

export default Pantalla23;