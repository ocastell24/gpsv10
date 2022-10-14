import { Loader, MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { Link } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

function Pantalla21() {
  return (

      <div>
        <nav>
          <ol>
            <li>
            <Link to="/">Menu principal / </Link>
              <Link to="/Pantalla21">Flota</Link>
            </li>
          </ol>
        </nav>
      </div>
    
  );
};

export default Pantalla21;