import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Card, CardItem, Body, Button, ActionSheet, Root } from 'native-base'

export default class PreguntaContraindicaciones extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opcionesVisibles: false,
      clickeadoSi: false,
      clickeadoNo: false
    }
  }

  renderIf(condicion, contenido) {
    if (condicion) {
        return contenido
    } else {
        return null
    }
  }

  render() {
    const { pregunta, opciones } = this.props

    return (
      <Root>
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
              onPress={ () => this.setState({ opcionesVisibles: true })
                }
            >
              <Text style= { estilos.textoBoton }>SI</Text>
            </Button>
          </CardItem>
          { this.renderIf(this.state.opcionesVisibles,
            <CardItem>
              <Body>
                <Text style= { estilos.textoPregunta }>
                  { this.props.opciones }
                </Text>
              </Body>
            </CardItem>
          )}
        </Card>
      </Root>
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
