import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content } from 'native-base'

import PreguntaRequisitos from '../componentes/PreguntaRequisitos.js'

export default class EscenaRequisitos extends Component {
  render() {
    return (
      <Container>
        <View flex= { 1 } style= {estilos.contenedorPreguntas}>
          <PreguntaRequisitos
            pregunta= '¿La edad es entre los 2 y los 80 años?'
          />
          <PreguntaRequisitos
            pregunta= '¿El tiempo de internación es menor a 4 semanas?'
          />
          <PreguntaRequisitos
            pregunta= '¿Es conocida la causa de muerte?'
          />
          <PreguntaRequisitos
            pregunta= '¿El PCR es hace menos de 6 horas, o 12 horas si el cadáver fue refrigerado dentro de la primera hora?'
          />
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
