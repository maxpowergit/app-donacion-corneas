import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

import PreguntasRequisitos from '../lib/PreguntasRequisitos.js'
import PreguntaRequisitos from '../componentes/PreguntaRequisitos.js'

class EscenaRequisitos extends Component {
  render() {
    const preguntas = Object.keys(PreguntasRequisitos).map( pregunta => (
      <PreguntaRequisitos
        key={ PreguntasRequisitos[pregunta].llave }
        llave={ PreguntasRequisitos[pregunta].llave }
        texto={ PreguntasRequisitos[pregunta].texto }
        cumplir={ () => this.props.cumplirRequisito(PreguntasRequisitos[pregunta].llave) }
        incumplir={ () => this.props.incumplirRequisito(PreguntasRequisitos[pregunta].llave) }
      />
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

const mapStateToProps = ({ requisitos }) => ({
  requisitos
})

const mapDispatchToProps = dispatch => ({
  cumplirRequisito: (llave, valor) => {
    dispatch({ type: 'REQUISITO_CUMPLIDO', valor })
  },
  incumplirRequisito: (valor) => {
    dispatch({ type: 'REQUISITO_INCUMPLIDO', valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaRequisitos)
