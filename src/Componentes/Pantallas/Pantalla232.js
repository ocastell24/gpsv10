import { Loader, MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Link } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import '../../App.css';
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

function Pantalla232() {
  return (

    <div className='contenedor-Pantalla232' >
      <nav>
        <ol>
          <li>
            <Link to="/">Menu principal / </Link>
            <Link to="/Pantalla23">Reportes / </Link>
            <Link to="/Pantalla232">Reportes de Alertas</Link>
          </li>
        </ol>
      </nav>
      <p> Reporte de alertas</p>

      <table>
        <tr>
          <th align='center'>Placa</th>
          <th align='center'>Alerta</th>
          <th align='center'>Fecha</th>
          <th align='center'>Hora</th>          
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Alerta por geocerca</td>
          <td>01.01.2022</td>
          <td>23:45</td>          
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Alerta por geocerca</td>
          <td>01.01.2022</td>
          <td>23:45</td>          
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Alerta por geocerca</td>
          <td>01.01.2022</td>
          <td>23:45</td>          
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Alerta por geocerca</td>
          <td>01.01.2022</td>
          <td>23:45</td>          
        </tr>     
        <tr>
          <td>B6Z-278</td>
          <td>Alerta por geocerca</td>
          <td>01.01.2022</td>
          <td>23:45</td>          
        </tr>                             
      </table>
    </div>
  );
};

export default Pantalla232;