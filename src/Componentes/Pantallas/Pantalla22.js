import { Loader, MapView, View, Flex, Heading, Geocoder, Text, Image } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Marker, Popup } from 'react-map-gl';
import awsExports from '../../aws-exports';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const locationData = [
  {
    id: 1,
    title: 'Esta es tu ubicación',
    description:
      "Esta es una prueba de ubicación",
    image:
      'https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg',
    longitude: -76.8561005477918,
    latitude: -12.226951214963051,
  }
]

function MarkerWithPopup({ latitude, longitude, title, description, image }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleMarkerClick = ({ originalEvent }) => {
    originalEvent.stopPropagation()
    setShowPopup(true)
  }
  return (
    <>
      <Marker
        latitude={latitude}
        longitude={longitude}
        onClick={handleMarkerClick}
        scale={0.8}
        color={'blue'}
      />
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offset={{ bottom: [0, -40] }}
          onClose={() => setShowPopup(false)}
        >
          <Heading level={5}>{title}</Heading>
          <Text>{description}</Text>
          <Flex justifyContent={'center'}>
            <Image
              objectFit={'contain'}
              width="200px"
              height="200px"
              src={image}
            />
          </Flex>
        </Popup>
      )}
    </>
  )
}

function Pantalla22() {
  return (
    <View>

      <div>
        <nav>
          <ol>
            <li>
              <Link to="/">Menu principal /</Link>
              <Link to="/Pantalla22">Vehiculo</Link>
            </li>
          </ol>
        </nav>
      </div>

      <form className='Tarea-fromulario'>
        <input
          placeholder='Escribe una placa'
          type='text'
        />
        <button>Buscar</button>
      </form>

      <Flex direction={'column'} alignItems={'center'}>
        <Heading level={3}>Esta es la ubicacion</Heading>

        <MapView
          initialViewState={{
            latitude: -12.226951214963051,
            longitude: -76.8561005477918,
            zoom: 15,
          }}

          style={{ width: '600px', height: '600px' }}
        >

          {locationData.map((loc) => (
            <MarkerWithPopup
              key={loc.id}
              latitude={loc.latitude}
              longitude={loc.longitude}
              title={loc.title}
              description={loc.description}
              image={loc.image}
            />
          ))}
        </MapView>
      </Flex>
    </View>
  )
}

export default Pantalla22;