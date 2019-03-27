import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

import mapaRequisitos from '../lib/mapaRequisitos.js'
import PreguntaRequisitos from '../componentes/PreguntaRequisitos.js'

class EscenaRequisitos extends Component {
  render() {
    const preguntas = Object.keys(mapaRequisitos).map( pregunta => (
      <PreguntaRequisitos
        key={ mapaRequisitos[pregunta].llave }
        llave={ mapaRequisitos[pregunta].llave }
        texto={ mapaRequisitos[pregunta].texto }
        cumplir={ () => this.props.cumplirRequisito(mapaRequisitos[pregunta].llave) }
        incumplir={ () => this.props.incumplirRequisito(mapaRequisitos[pregunta].llave) }
        cumplido = { true }
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
    dispatch({ type: 'REQUISITO_CUMPLIDO', llave: valor })
  },
  incumplirRequisito: (valor) => {
    dispatch({ type: 'REQUISITO_INCUMPLIDO', valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaRequisitos)
