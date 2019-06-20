import React, { Component } from 'react'
import { LayoutAnimation, Animated, Easing, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import { Form } from 'native-base'
import { connect } from 'react-redux'

import { buscarEnAgenda } from '../lib/contactos'
import LogoFadeIn from '../componentes/LogoFadeIn'
import IngresarTelefono from '../componentes/IngresarTelefono'
import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'

import { estilos, logoChico, logoGrande} from '../estilos/Base'

// FIXME Tiene que estar acá afuera?
const AnimatedLogoFadeIn = Animated.createAnimatedComponent(LogoFadeIn)

class Ingreso extends Component {
  constructor(props) {
    super(props)
    this.alturaLogo = new Animated.Value(logoGrande)
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.seMuestra.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.seEsconde.bind(this))
  }

  componentDidUpdate(prevProps) {
    const { telefono } = this.props
    if (Boolean(prevProps.telefono) !== Boolean(telefono)) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  seMuestra() {
    Animated.timing(this.alturaLogo, {
      duration: 250,
      easing: Easing.elastic(1),
      toValue: logoChico
    }).start()
  }

  seEsconde() {
    Animated.timing(this.alturaLogo, {
      duration: 250,
      easing: Easing.elastic(1),
      toValue: logoGrande
    }).start()
  }

  navegarSiHayTelefono() {
    const { telefono, cambiarTiempoTranscurrido, navigation } = this.props

    if (telefono) {
      navigation.navigate('requisitos')
    } else {
      cambiarTiempoTranscurrido(true)
    }
  }

  botonFooter() {
    const { navigation, telefono, guardarTelefono, tiempoTranscurrido } = this.props
    const { navigate } = navigation

    if (tiempoTranscurrido) {
      return (
        <>
          <BotonFooter
            onPress={ () => buscarEnAgenda(guardarTelefono) }
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
        contentContainerStyle={ estilos.escenaPopup }
        footer={ this.botonFooter() }
        ocultarHeader
      >
        <Form style={ estilos.escenaPopup }>
          <AnimatedLogoFadeIn
            duracion={ 3500 }
            dimension={ this.alturaLogo }
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
