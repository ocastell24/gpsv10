import { Loader, MapView } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

function Pantalla22() {
    return (
        <div>
          <h3>¡¡¡¡¡Rastreo de un vehiculo PERRRRRAAAAA!!!</h3>
          <Loader 
   size="small"
   variation="linear"
  />
          <MapView 
             initialViewState={{
              latitude: -12.059246,
              longitude: -77.034727,
              zoom: 15,
            }}
            />
        </div>
      );
};

export default Pantalla22;