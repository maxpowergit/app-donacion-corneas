import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import mapaContraindicaciones from '../lib/mapaContraindicaciones'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'
import ModalOpciones from '../componentes/ModalOpciones'
import BotonFooter from '../componentes/BotonFooter'

class Contraindicaciones extends Component {
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

  render() {
    const { asignarContraindicacion, contraindicaciones, sinContraindicaciones, navigation, modalVisible, cambiarModalVisible } = this.props
    const { navigate } = navigation
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

    let boton = 'Continuar protocolo'
    if (!sinContraindicaciones) {
      boton = 'Tiene contraindicaciones'
    }

    const botonFooter = (
      <BotonFooter
        onPress={ () => navigate('contacto') }
        texto={ boton }
        disabled={ !sinContraindicaciones }
      />
    )

    return (
      <Escena navigation={ navigation } footer={ botonFooter }>
        <ModalOpciones
          visible={ modalVisible }
          onRequestClose={ () => { cambiarModalVisible(false) } }
          opciones={ opcionesModal }
        />
        { preguntas }
      </Escena>
    )
  }
}

Contraindicaciones.propTypes = {
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
  const sinContraindicaciones = Object.values(contraindicaciones).every(
    contraindicacion => !contraindicacion
  )

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

export default connect(mapStateToProps, mapDispatchToProps)(Contraindicaciones)
