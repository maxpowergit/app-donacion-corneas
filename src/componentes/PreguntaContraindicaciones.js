import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import { Card, CardItem, Body, Button, ActionSheet } from 'native-base'

export default class PreguntaContraindicaciones extends Component {
  listaDeOpciones() {
    const { indicar, contraindicar, opciones } = this.props
    const items = opciones.concat('Ninguno')

    ActionSheet.show(
      {
        options: items,
        title: '¿Es alguno de estos?'
      },
      (buttonIndex) => {
        isNaN(buttonIndex) ? null : buttonIndex == items.length - 1 ? indicar() : contraindicar()
      }
    )
  }

  render() {
    const { texto, indicar, contraindicado } = this.props

    return (
      <Card>
        <CardItem>
          <Body>
            <Text style={ estilos.textoPregunta }>
              { texto }
            </Text>
          </Body>
        </CardItem>
        <CardItem footer style={ estilos.contenedorBotones }>
          <Button
            full
            success={ contraindicado == false || contraindicado == null ? true : null }
            flex={ 1 }
            onPress={ () => indicar() }
          >
            <Text style={ estilos.textoBoton }>NO</Text>
          </Button>
          <Button
            full
            danger={ contraindicado == true || contraindicado == null ? true : null }
            flex={ 1 }
            onPress={ () => this.listaDeOpciones() }
          >
            <Text style={ estilos.textoBoton }>SI</Text>
          </Button>
        </CardItem>
      </Card>
    )
  }
}

PreguntaContraindicaciones.propTypes = {
  // FIX array es prohibido.
  opciones: PropTypes.array.isRequired,
  texto: PropTypes.string.isRequired,
  // FIX contraindicado dispara error
  // contraindicado: PropTypes.bool.isRequired,
  indicar: PropTypes.func.isRequired,
  contraindicar: PropTypes.func.isRequired
}

const estilos = StyleSheet.create({
  contenedorBotones: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
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
