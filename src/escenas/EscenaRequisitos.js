import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content } from 'native-base'

import PreguntasRequisitos from '../lib/PreguntasRequisitos.js'
import PreguntaRequisitos from '../componentes/PreguntaRequisitos.js'

export default class EscenaRequisitos extends Component {
  render() {
    const preguntas = Object.keys(PreguntasRequisitos).map( pregunta => (
      <PreguntaRequisitos key={ PreguntasRequisitos[pregunta].llave } texto={ PreguntasRequisitos[pregunta].texto } />
    ))

    return (
      <Container>
        <View flex= { 1 } style= {estilos.contenedorPreguntas}>
          { preguntas }
        </View>
      </Container>
    )
  }
}

const estilos = StyleSheet.create({
  contenedorPreguntas: {
    justifyContent: 'space-around',
    padding: 8,
  },
})
