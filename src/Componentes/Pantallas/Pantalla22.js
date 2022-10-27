//import {
// Loader, MapView, View, Flex, Heading, Geocoder, Text, Image, Button, LocationSearch
//} from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
//import { Marker, Popup } from 'react-map-gl/dist/es5';
//import { Marker, Popup } from 'react-map-gl';
import awsExports from '../../aws-exports';
//import { useState } from 'react';
////import { Link } from 'react-router-dom';
//import '@aws-amplify/ui-react/styles.css';
//import maplibregl from 'maplibre-gl';
//import AWS from 'aws-sdk';
import React, { useEffect, useRef } from 'react';
//import "maplibre-gl/dist/maplibre-gl.css";
//import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
//import "maplibre-gl-js-amplify/dist/public/amplify-geocoder.css";
import { createMap } from "maplibre-gl-js-amplify";
//import Navbar from './components/navbar.js';

Amplify.configure(awsExports);

function Pantalla22() {

  const mapRef = useRef(null);

  useEffect(() => {
    let map: maplibregl.Map;

    async function initializeMap() {
      if (mapRef.current != null) {
        map = await createMap({
          container: mapRef.current,
          center: [-122.431297, 37.773972],
          zoom: 11,
        });
      }
    }

    initializeMap();

    return function cleanup() {
      if (map != null) map.remove();
    };
  }, []);

  return (
    <div ref={mapRef} id="map" />
  );


}
export default Pantalla22;