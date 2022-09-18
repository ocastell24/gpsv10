import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Divider, translations, withAuthenticator, Button, Heading, Flex, ButtonGroup, components } from '@aws-amplify/ui-react';
import React, { Component } from 'react';

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


export class Pantalla2 extends Component {
    render() {
        return (
            <>
                <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap">
                    <Heading level={4}>Hola {this.props.user}</Heading>
                    <Button style={Styles.btnSign} onClick={this.props.signOut}>Salir</Button>
                </Flex>
                <Flex direction="column">

                    <Divider
                        size="large"
                        orientation="horizontal"
                    />
                </Flex>
                {/* Add Todo JSX here  */
                    <div style={Styles.mainContainer}>

                        <ButtonGroup
                            variation='primary'
                            size="large"
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button
                                onClick={() => alert('Implementar la pagina Flota. Al toque..!')}>
                                Flota</Button>
                            <Button
                                onClick={() => alert('Implementar la pagina Vehiculo. Al toque..!')}>
                                Vehiculo</Button>
                            <Button
                                onClick={() => alert('Implementar la pagina Reportes. Al toque..!')}
                            >Reportes</Button>
                        </ButtonGroup>
                    </div>
                }
            </>
        )
    }
}
export default Pantalla2;