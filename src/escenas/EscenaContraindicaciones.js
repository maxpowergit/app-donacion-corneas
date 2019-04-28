import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { Button, Text } from 'native-base'

import mapaContraindicaciones from '../lib/mapaContraindicaciones'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'
import ModalOpciones from '../componentes/ModalOpciones'

import estilos from '../estilos/escenas/EscenaContraindicaciones'

class EscenaContraindicaciones extends Component {
  constructor(props) {
    super(props)
    this.state = { opcionesModal: [] }
  }

  armarOpcionesModal(opciones) {
    const { asignarContraindicacion, cambiarModalVisible } = this.props
    const preguntas = opciones.map(llave => (
      <Pregunta
        key={ llave }
        llave={ llave }
        texto={ llave }
        // marcar={ () => asignarContraindicacion(llave, true) }
        marcar={ () => this.armarOpcionesModal(mapaContraindicaciones[llave]) }
        desmarcar={ () => asignarContraindicacion(llave, false) }
      />
    ))

    this.setState({ opcionesModal: preguntas })
    cambiarModalVisible(true)
  }

  verificar(sinContraindicaciones) {
    const { navigation } = this.props
    const { navigate } = navigation

    if (!sinContraindicaciones) {
      return (
        Alert.alert(
          'Contraindicaciones',
          'Hay contraindicaciones marcadas, la donación no es viable.',
        )
      )
    }
    return (
      Alert.alert(
        'Contraindicaciones',
        'El paciente no tiene contraindicaciones',
        [
          { text: 'CONTINUAR', onPress: () => navigate('Contacto') }
        ]
      )
    )
  }

  render() {
    const { asignarContraindicacion, contraindicaciones, sinContraindicaciones, navigation, modalVisible, cambiarModalVisible } = this.props
    const { opcionesModal } = this.state

    const preguntas = Object.keys(mapaContraindicaciones).map(llave => (
      <Pregunta
        key={ llave }
        llave={ llave }
        texto={ llave }
        // marcar={ () => asignarContraindicacion(llave, true) }
        marcar={ () => this.armarOpcionesModal(mapaContraindicaciones[llave]) }
        desmarcar={ () => asignarContraindicacion(llave, false) }
        marcada={ contraindicaciones[llave] }
      />
    ))

    return (
      <Escena navigation={ navigation }>
        <ModalOpciones
          visible={ modalVisible }
          onRequestClose={ () => { cambiarModalVisible(false) } }
          opciones={ opcionesModal }
        />
        { preguntas }
        <Button
          onPress={ () => this.verificar(sinContraindicaciones) }
          style={ estilos.boton }
        >
          <Text style={ estilos.textoBoton }>CONTINUAR</Text>
        </Button>
      </Escena>
    )
  }
}

EscenaContraindicaciones.propTypes = {
  sinContraindicaciones: PropTypes.bool.isRequired,
  contraindicaciones: PropTypes.shape().isRequired,
  asignarContraindicacion: PropTypes.func.isRequired,
  cambiarModalVisible: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ contraindicaciones, modalVisible }) => {
  const sinContraindicaciones = Object.values(contraindicaciones).every(contraindicacion => !contraindicacion)
  return ({
    contraindicaciones,
    modalVisible,
    sinContraindicaciones
  })
}

const mapDispatchToProps = dispatch => ({
  asignarContraindicacion: (llave, valor) => {
    dispatch({ type: 'CONTRAINDICACION_ASIGNADA', llave, valor })
  },
  cambiarModalVisible: (valor) => {
    dispatch({ type: 'MODAL_VISIBLE', valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaContraindicaciones)
