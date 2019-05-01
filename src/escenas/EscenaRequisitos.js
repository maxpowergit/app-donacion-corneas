import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Text } from 'native-base'

import mapaRequisitos from '../lib/mapaRequisitos'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'

import estilos from '../estilos/escenas/EscenaRequisitos'

class EscenaRequisitos extends Component {
  botonFooter() {
    const { navigation, requisitosCumplidos } = this.props
    const { navigate } = navigation

    let boton = 'No cumple los requisitos'
    if (requisitosCumplidos) {
      boton = 'Continuar protocolo'
    }

    return (
      <Button
        full
        onPress={ () => navigate('Contraindicaciones') }
        style={ estilos.boton }
        disabled={ !requisitosCumplidos }
      >
        <Text style={ estilos.textoBoton }>
          { boton.toUpperCase() }
        </Text>
      </Button>
    )
  }

  render() {
    const { cumplirRequisito, requisitos, navigation } = this.props

    const preguntas = Object.keys(mapaRequisitos).map(llave => (
      <Pregunta
        key={ llave }
        llave={ llave }
        texto={ mapaRequisitos[llave] }
        marcar={ () => cumplirRequisito(llave, true) }
        desmarcar={ () => cumplirRequisito(llave, false) }
        marcada={ requisitos[llave] }
      />
    ))

    return (
      <Escena navigation={ navigation } footer={ this.botonFooter() }>
        { preguntas }
      </Escena>
    )
  }
}

EscenaRequisitos.propTypes = {
  requisitosCumplidos: PropTypes.bool.isRequired,
  requisitos: PropTypes.shape().isRequired,
  cumplirRequisito: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ requisitos }) => {
  const requisitosCumplidos = Object.values(requisitos).length === 4
    && Object.values(requisitos).every(requisito => requisito)

  return ({
    requisitos,
    requisitosCumplidos
  })
}

const mapDispatchToProps = dispatch => ({
  cumplirRequisito: (llave, valor) => {
    dispatch({ type: 'REQUISITO_CUMPLIDO', llave, valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaRequisitos)
