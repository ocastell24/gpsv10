import {
  Loader, MapView, View, Flex, Heading, Geocoder
  , Text, Image
} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Marker, Popup } from 'react-map-gl/dist/es5';
import awsExports from '../../aws-exports';
import { useState } from 'react';
import { Link } from 'react-router-dom';

Amplify.configure(awsExports);

function Pantalla22() {
  return (
    <MapView />
  )
}

export default Pantalla22;