import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'native-base'
import { connect } from 'react-redux'
import Contacts from 'react-native-unified-contacts'

import { permisoContactos, telefonoDe } from '../lib/contactos'
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

  async buscarEnAgenda() {
    const { guardarTelefono } = this.props

    const permitido = await permisoContactos()

    if (permitido) {
      Contacts.selectContact((error, contacto) => {
        if (!error) {
          guardarTelefono(telefonoDe(contacto))
        }
      })
    }
  }

  botonFooter() {
    const { navigation, telefono, tiempoTranscurrido } = this.props
    const { navigate } = navigation

    if (tiempoTranscurrido) {
      return (
        <>
          <BotonFooter
            onPress={ () => this.buscarEnAgenda() }
            texto="Buscar en Agenda"
          />

          { telefono
            ? (
              <BotonFooter
                onPress={ () => navigate('requisitos') }
                texto="Confirmar"
              />
            )
            : null
          }
        </>
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
