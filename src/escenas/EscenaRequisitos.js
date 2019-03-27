import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

import mapaRequisitos from '../lib/mapaRequisitos.js'
import PreguntaRequisitos from '../componentes/PreguntaRequisitos.js'

class EscenaRequisitos extends Component {
  render() {
    const preguntas = Object.keys(mapaRequisitos).map(llave => (
      <PreguntaRequisitos
        key={ llave }
        llave={ llave }
        texto={ mapaRequisitos[llave] }
        cumplir={ () => this.props.cumplirRequisito(llave, true) }
        incumplir={ () => this.props.cumplirRequisito(llave, false) }
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
  //TODO Convertir a JS del futuro.
  cumplirRequisito: (llave, valor) => {
    dispatch({ type: 'REQUISITO_CUMPLIDO', llave: llave, valor: valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaRequisitos)
