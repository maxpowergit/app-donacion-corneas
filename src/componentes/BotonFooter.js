import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'native-base'
import { Animated } from 'react-native'

import estilos from '../estilos/componentes/BotonFooter'
import { colores } from '../estilos/Base'

export default class BotonFooter extends Component {
  constructor(props) {
    super(props)
    const checkearHabilitado = props.disabled ? 1 : 0
    this.valorAnimacion = new Animated.Value(checkearHabilitado)
  }

  componentDidUpdate(prevProps) {
    const { disabled } = this.props
    if (disabled !== prevProps.disabled) {
      switch (disabled) {
        case true:
          this.animar(0, 1)
          break
        case false:
          this.animar(1, 0)
          break
        default:
          break
      }
    }
  }

  animar(colorActual, colorFuturo) {
    this.valorAnimacion.setValue(colorActual)
    Animated.timing(
      this.valorAnimacion,
      {
        toValue: colorFuturo,
        duration: 400
      }
    ).start()
  }

  render() {
    const { onPress, texto, disabled } = this.props

    this.colorFondo = this.valorAnimacion.interpolate({
      inputRange: [0, 1],
      outputRange: [colores.primario, colores.terciario]
    })

    this.colorTexto = this.valorAnimacion.interpolate({
      inputRange: [0, 1],
      outputRange: [colores.terciario, colores.primario]
    })


    return (
      <Animated.View style={ [estilos.contenedor, { backgroundColor: this.colorFondo }] }>
        <Button
          full
          transparent
          onPress={ onPress }
          disabled={ disabled }
        >
          <Animated.Text style={ [estilos.texto, { color: this.colorTexto }] }>
            { texto }
          </Animated.Text>
        </Button>
      </Animated.View>
    )
  }
}

BotonFooter.propTypes = {
  onPress: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

BotonFooter.defaultProps = {
  disabled: false
}
