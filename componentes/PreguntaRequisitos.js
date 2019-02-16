import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, Body, Button } from 'native-base';

export default class PreguntaRequisitos extends Component {
  render() {
    const { pregunta } = this.props
    
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style= { estilos.textoPregunta }>
              { this.props.pregunta }
            </Text> 
          </Body>
        </CardItem>
        <CardItem footer style= { estilos.contenedorBotones }> 
          <Button danger flex= { 1 } style= { estilos.boton }>
            <Text style= { estilos.textoBoton }>NO</Text>
          </Button>
          <Button success flex= { 1 } style= { estilos.boton }>
            <Text style= { estilos.textoBoton }>SI</Text>
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const estilos = StyleSheet.create({
  contenedorBotones: {
    justifyContent: 'space-between',
  }, 
  boton: {
    justifyContent: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16
  },
  textoPregunta: {
    color: 'black',
    fontSize: 18
  }
})
