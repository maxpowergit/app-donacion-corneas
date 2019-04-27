import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { Button, Text } from 'native-base'

import mapaRequisitos from '../lib/mapaRequisitos'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'

import estilos from '../estilos/escenas/EscenaRequisitos'

class EscenaRequisitos extends Component {
  verificar(requisitosCumplidos) {
    const { navigation } = this.props
    const { navigate } = navigation

    if (!requisitosCumplidos) {
      return (
        Alert.alert(
          'Requisitos',
          'Todos los requisitos son necesarios. La donación no es viable.',
        )
      )
    }
    return (
      Alert.alert(
        'Requisitos',
        'Todos los requisitos fueron cumplidos.',
        [
          { text: 'CONTINUAR', onPress: () => navigate('Contraindicaciones') }
        ]
      )
    )
  }

  render() {
    const { cumplirRequisito, requisitos, requisitosCumplidos, navigation } = this.props

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
      <Escena navigation={ navigation }>
        { preguntas }
        <Button
          onPress={ () => this.verificar(requisitosCumplidos) }
          style={ estilos.boton }
        >
          <Text style={ estilos.textoBoton }>CONTINUAR</Text>
        </Button>
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
