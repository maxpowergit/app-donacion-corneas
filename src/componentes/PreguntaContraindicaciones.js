import React, { Component } from 'react'
import { StyleSheet, Text, View, LayoutAnimation } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, Body, Button, ListItem, List } from 'native-base'

export default class PreguntaContraindicaciones extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  listaDeOpciones() {
    this.props.opciones.map((opcion, llave) => {
      return (
        <ListItem key= { llave }>
          <Text style= { estilos.textoPregunta }> { opcion } </Text>
        </ListItem>
      )
    })
  }

  render() {
    const { texto, opciones, indicar, contraindicar, llave, contraindicado, opcionesVisibles } = this.props

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
            onPress={ () => contraindicar() }
          >
            <Text style= { estilos.textoBoton }>SI</Text>
          </Button>
        </CardItem>

        {
          //TODO Queda pendiente que hacer con las opcionesVisibles.
          opcionesVisibles &&
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
