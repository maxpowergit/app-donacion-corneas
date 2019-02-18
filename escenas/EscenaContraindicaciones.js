import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Container, Content } from 'native-base'

import PreguntaContraindicaciones from '../componentes/PreguntaContraindicaciones.js'

export default class EscenaContraindicaciones extends Component {
  render() {
    return (
      <Container>
        <ScrollView flex= { 1 } style= {estilos.contenedorPreguntas}>
          <PreguntaContraindicaciones
            pregunta= 'Pregunta 1'
            opciones= { ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"] }
          />
          <PreguntaContraindicaciones
            pregunta= 'Pregunta 2'
          />
           <PreguntaContraindicaciones
            pregunta= 'Pregunta 3'
          />
          <PreguntaContraindicaciones
            pregunta= 'Pregunta 4'
          />
          <PreguntaContraindicaciones
            pregunta= 'Pregunta 5'
          />
          <PreguntaContraindicaciones
            pregunta= 'Pregunta 6'
          />
           <PreguntaContraindicaciones
            pregunta= 'Pregunta 7'
          />
          <PreguntaContraindicaciones
            pregunta= 'Pregunta 8'
          />
        </ScrollView>
      </Container>
    )
  }
}

const estilos = StyleSheet.create({
  contenedorPreguntas: {
    padding: 8,
  },
})
