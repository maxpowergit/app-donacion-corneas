import React, { Component } from 'react'
import { StyleSheet, Text, View, LayoutAnimation } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, Body, Button, ListItem, List } from 'native-base'

export default class PreguntaContraindicaciones extends Component {

  constructor(props) {
    super(props)
    this.state = {
      opcionesVisibles: false,
      clickeadoSi: false,
      clickeadoNo: false
    }
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  listaDeOpciones() {
    return this.props.opciones.map((opcion, llave) => {
      return (
        <ListItem  key= { llave }>
          <Text style= { estilos.textoPregunta }> { opcion } </Text>
        </ListItem>
      )
    })
  }

  render() {
    const { pregunta, opciones } = this.props

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
          <Button full danger flex= { 1 }>
            <Text style= { estilos.textoBoton }>NO</Text>
          </Button>
          <Button
            full
            success
            flex= { 1 }
            onPress={ () => this.setState({ opcionesVisibles: true }) }
          >
            <Text style= { estilos.textoBoton }>SI</Text>
          </Button>
        </CardItem>
        { this.state.opcionesVisibles &&
          <CardItem>
            <Body>
              <List>
                { this.listaDeOpciones() }
              </List>
            </Body>
          </CardItem>
        }
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
