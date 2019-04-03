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
        if (buttonIndex === items.length - 1) {
          return indicar()
        }

        return contraindicar()
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
            success={ contraindicado === false || contraindicado === null ? true : null }
            flex={ 1 }
            onPress={ () => indicar() }
          >
            <Text style={ estilos.textoBoton }>NO</Text>
          </Button>
          <Button
            full
            danger={ contraindicado === true || contraindicado === null ? true : null }
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
  opciones: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  texto: PropTypes.string.isRequired,
  contraindicado: PropTypes.bool,
  indicar: PropTypes.func.isRequired,
  contraindicar: PropTypes.func.isRequired
}

PreguntaContraindicaciones.defaultProps = {
  contraindicado: null
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
