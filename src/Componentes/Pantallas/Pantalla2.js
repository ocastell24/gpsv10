import '@aws-amplify/ui-react/styles.css';
//import { Amplify } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react-v1';
import { Link, BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
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
import React from 'react';
import Pantalla22 from './Pantalla22';

const Styles = {
    container: {
        width: 400,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
    },
    mainContainer: { paddingTop: '150px' },
    button: {
        backgroundColor: 'black',
        color: 'white',
        outline: 'none',
        fontSize: 18,
        padding: '12px 0px'
    },
    btnSign: { textAlign: 'right' }
}

function Pantalla2({ signOut, user }) {
    return (

        /*Nuevo codigo para la navegacion */
        <div className='contenedor-Pantalla2'>
           
            <div>
                <nav>
                    <ol>
                        <li>
                            <Link to="/">Menu principal</Link>
                        </li>
                    </ol>
                </nav>
            </div>

            <Flex
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                alignContent="center"
                wrap="wrap">
                <Heading level={4}> Hola {user.username}</Heading>
                <Button onClick={signOut}>Salir</Button>
            </Flex>

            <ButtonGroup
                variation='primary'
                size="large"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
               <Link to="/pantalla21" style={{ textDecoration: 'none' }}>
                    <Button variation='primary'>
                        Flota</Button>
                </Link>

                <Link to="/pantalla22" style={{ textDecoration: 'none' }}>
                    <Button variation='primary'>
                        Vehiculo</Button>
                </Link>

                <Link to="/pantalla23" style={{ textDecoration: 'none' }}>
                    <Button variation='primary'>
                        Reportes</Button>
                </Link>

            </ButtonGroup>
        </div >
    );
}

export default Pantalla2;