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

function Pantalla231() {
  return (

    <div className='contenedor-Pantalla231'>
      <nav>
        <ol>
          <li>
            <Link to="/">Menu principal / </Link>
            <Link to="/Pantalla23">Reportes / </Link>
            <Link to="/Pantalla231">Reportes de Vehiculos</Link>
          </li>
        </ol>
      </nav>
      <p> Reporte de vehiculos</p>

      <table>
        <tr>
          <th align='center'>Placa</th>
          <th align='center'>Marca</th>
          <th align='center'>Descripcion</th>
          <th align='center'>Año</th>
          <th align='center'>Ubicacion</th>
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Audi</td>
          <td>Auto del dueño</td>
          <td>2020</td>
          <td> DMS: 41°24'12.2"N 2°10'26.5"E. </td>
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Audi</td>
          <td>Auto del dueño</td>
          <td>2020</td>
          <td> DMS: 41°24'12.2"N 2°10'26.5"E. </td>
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Audi</td>
          <td>Auto del dueño</td>
          <td>2020</td>
          <td> DMS: 41°24'12.2"N 2°10'26.5"E. </td>
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Audi</td>
          <td>Auto del dueño</td>
          <td>2020</td>
          <td> DMS: 41°24'12.2"N 2°10'26.5"E. </td>
        </tr>
        <tr>
          <td>B6Z-278</td>
          <td>Audi</td>
          <td>Auto del dueño</td>
          <td>2020</td>
          <td> DMS: 41°24'12.2"N 2°10'26.5"E. </td>
        </tr>
      </table>

    </div>


  );
};

export default Pantalla231;