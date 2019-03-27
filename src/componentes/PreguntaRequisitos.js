import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, Body, Button } from 'native-base';

export default class PreguntaRequisitos extends Component {
  render() {
    const { texto, cumplir, incumplir, llave, cumplido } = this.props
    
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style= { estilos.textoPregunta }>
              { this.props.texto }
            </Text> 
          </Body>
        </CardItem>
        <CardItem footer style= { estilos.contenedorBotones }> 
          <Button
            full
            danger= { cumplido == null | cumplido == false ? true : null }
            flex= { 1 }
            onPress={ () => incumplir() }
          >
            <Text style= { estilos.textoBoton }>NO</Text>
          </Button>
          <Button
            full
            success= { cumplido == null | cumplido == true ? true : null }
            flex= { 1 }
            onPress={ () => cumplir() }
          >
            <Text style= { estilos.textoBoton }>SI</Text>
          </Button>
        </CardItem>
      </Card>
    )
  }
}

const estilos = StyleSheet.create({
  contenedorBotones: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
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
