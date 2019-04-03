import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing } from 'react-native'
import { Icon } from 'native-base'

export default class LogoFadeIn extends Component {
  constructor() {
    super()
    this.valorAnimacion = new Animated.Value(0)
  }

  componentDidMount() {
    this.animar()
  }

  animar() {
    const { retraso, duracion, callback } = this.props
    this.valorAnimacion.setValue(0)
    Animated.timing(
      this.valorAnimacion,
      {
        toValue: 1,
        delay: retraso,
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

    const desdeArriba = this.valorAnimacion.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 0]
    })

    return (
      <Animated.View style={ {
        opacity,
        marginTop: desdeArriba
      } }
      >
        <Icon
          name="home"
          style={ {
            padding: '10%',
            fontSize: 150,
            color: '#3F51B5'
          } }
        />
      </Animated.View>
    )
  }
}

LogoFadeIn.propTypes = {
  retraso: PropTypes.number,
  duracion: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired
}
