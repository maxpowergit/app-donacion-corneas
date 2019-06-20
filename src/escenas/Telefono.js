import React, { Component } from 'react'
import { LayoutAnimation, Animated, Easing, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import { Form, Icon } from 'native-base'
import { connect } from 'react-redux'

import { buscarEnAgenda } from '../lib/contactos'
import IngresarTelefono from '../componentes/IngresarTelefono'
import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'

import estilos from '../estilos/escenas/Telefono'

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

class Telefono extends Component {
  constructor(props) {
    super(props)
    this.alturaIcono = new Animated.Value(100)
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
    Animated.timing(this.alturaIcono, {
      duration: 250,
      easing: Easing.elastic(1),
      toValue: 100
    }).start()
  }

  seEsconde() {
    Animated.timing(this.alturaIcono, {
      duration: 250,
      easing: Easing.elastic(1),
      toValue: 150
    }).start()
  }

  render() {
    const { navigation, telefono, guardarTelefono } = this.props

    const botonFooter = (
      <>
        <BotonFooter
          onPress={ () => buscarEnAgenda(guardarTelefono) }
          texto="Buscar en Agenda"
        />

        { telefono
          ? (
            <BotonFooter
              onPress={ () => navigation.goBack() }
              texto="Confirmar"
            />
          )
          : null
        }
      </>
    )

    return (
      <Escena
        navigation={ navigation }
        footer={ botonFooter }
        contentContainerStyle={ estilos.escena }
        ocultarHeader
      >
        <Form style={ estilos.escena }>
          <AnimatedIcon
            name="local-phone"
            style={ [estilos.icono, { fontSize: this.alturaIcono }] }
            type="MaterialIcons"
          />

          <IngresarTelefono
            guardarTelefono={ guardarTelefono }
            telefono={ telefono }
            floatingLabel={ false }
            autoFocus
          />
        </Form>
      </Escena>
    )
  }
}

Telefono.propTypes = {
  guardarTelefono: PropTypes.func.isRequired,
  telefono: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ telefono }) => ({
  telefono
})

const mapDispatchToProps = dispatch => ({
  guardarTelefono: (telefono) => {
    dispatch({ type: 'GUARDAR_TELEFONO', telefono })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Telefono)
