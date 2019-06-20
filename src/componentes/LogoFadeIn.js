import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing, Image } from 'react-native'

import estilos from '../estilos/componentes/LogoFadeIn'


// Requerir assets al principio del archivo.
const logo = require('../assets/logo.png')

export default class LogoFadeIn extends Component {
  constructor() {
    super()

    this.valorAnimacion = new Animated.Value(0)
  }

  componentDidMount() {
    this.animar()
  }

  animar() {
    const { duracion, callback } = this.props

    this.valorAnimacion.setValue(0)

    Animated.timing(
      this.valorAnimacion,
      {
        toValue: 1,
        duration: duracion,
        easing: Easing.elastic(1)
      }
    ).start(callback)
  }

  render() {
    const opacity = this.valorAnimacion.interpolate({
      inputRange: [0, 0.25, 1],
      outputRange: [0, 0, 1]
    })

    return (
      <Animated.View style={ {
        opacity
      } }
      >
        <Image
          source={ logo }
          style={ estilos.imagen }
        />
      </Animated.View>
    )
  }
}

LogoFadeIn.propTypes = {
  duracion: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired
}
