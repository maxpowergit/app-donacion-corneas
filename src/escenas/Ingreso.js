import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'native-base'
import { connect } from 'react-redux'

import LogoFadeIn from '../componentes/LogoFadeIn'
import IngresarTelefono from '../componentes/IngresarTelefono'
import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'

import estilos from '../estilos/escenas/Ingreso'

class Ingreso extends Component {
  navegarSiHayTelefono() {
    const { telefono, cambiarTiempoTranscurrido, navigation } = this.props

    if (telefono) {
      navigation.navigate('requisitos')
    } else {
      cambiarTiempoTranscurrido(true)
    }
  }

  botonFooter() {
    const { navigation, telefono, tiempoTranscurrido } = this.props
    const { navigate } = navigation

    if (telefono && tiempoTranscurrido) {
      return (
        <BotonFooter
          onPress={ () => navigate('requisitos') }
          texto="Confirmar"
        />
      )
    }
    return null
  }

  mostrarTelefono() {
    const {
      telefono, guardarTelefono, tiempoTranscurrido
    } = this.props

    if (tiempoTranscurrido) {
      return (
        <IngresarTelefono
          floatingLabel={ false }
          telefono={ telefono }
          guardarTelefono={ guardarTelefono }
        />
      )
    }

    return null
  }

  render() {
    const { navigation } = this.props

    return (

      <Escena
        navigation={ navigation }
        contentContainerStyle={ estilos.centrado }
        footer={ this.botonFooter() }
        ocultarHeader
      >
        <Form style={ estilos.centrado }>
          <LogoFadeIn
            duracion={ 3500 }
            callback={ () => { this.navegarSiHayTelefono() } }
          />

          { this.mostrarTelefono() }
        </Form>
      </Escena>
    )
  }
}

Ingreso.propTypes = {
  telefono: PropTypes.string.isRequired,
  tiempoTranscurrido: PropTypes.bool.isRequired,
  guardarTelefono: PropTypes.func.isRequired,
  cambiarTiempoTranscurrido: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ telefono, tiempoTranscurrido }) => ({
  telefono,
  tiempoTranscurrido
})

const mapDispatchToProps = dispatch => ({
  guardarTelefono: (telefono) => {
    dispatch({ type: 'GUARDAR_TELEFONO', telefono })
  },
  cambiarTiempoTranscurrido: (tiempoTranscurrido) => {
    dispatch({ type: 'TIEMPO_TRANSCURRIDO', tiempoTranscurrido })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Ingreso)
