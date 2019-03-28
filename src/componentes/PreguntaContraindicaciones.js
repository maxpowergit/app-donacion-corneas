import React, { Component } from 'react'
import { StyleSheet, Text, View, LayoutAnimation } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, Body, Button, ListItem, List, ActionSheet } from 'native-base'

export default class PreguntaContraindicaciones extends Component {
  listaDeOpciones() {
    const { indicar, contraindicar, opciones } = this.props
    const items = opciones.concat('Ninguno')

    ActionSheet.show(
      {
        options: items,
        title: '¿Es alguno de estos?'
      },
      buttonIndex => { buttonIndex == opciones.length - 1 ? this.props.indicar() : this.props.contraindicar()
      }
    )}

  render() {
    const { texto, opciones, indicar, llave, contraindicado, opcionesVisibles } = this.props

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
          success= { contraindicado == false | contraindicado == null ? true : null }
          flex= { 1 }
          onPress={ () => indicar() }
          >
            <Text style= { estilos.textoBoton }>NO</Text>
          </Button>
          <Button
            full
            danger= { contraindicado == true | contraindicado == null ? true : null }
            flex= { 1 }
            onPress={ () => this.listaDeOpciones() }
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
