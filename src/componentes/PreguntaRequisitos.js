import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, Body, Button } from 'native-base';

export default class PreguntaRequisitos extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

 responder(respuesta) {
    this.setState({
      text: respuesta
    })
  }
 
  render() {
    const { texto } = this.props
    
    return (
      <Card>
        <CardItem>
          <Body>
            <Text style= { estilos.textoPregunta }>
              { this.props.texto }
            </Text> 
            <Text style= { estilos.textoPregunta }>
              { this.state.text }
            </Text>
          </Body>
        </CardItem>
        <CardItem footer style= { estilos.contenedorBotones }> 
          <Button full danger flex= { 1 } onPress={ () => this.responder('no') }>
            <Text style= { estilos.textoBoton }>NO</Text>
          </Button>
          <Button full success flex= { 1 } onPress={ () => this.responder('si') }>
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
