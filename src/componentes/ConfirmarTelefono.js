// Componente para confirmar la correctitud del número telfónico ingresado.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LayoutAnimation } from 'react-native'
import { Item, Button, Text } from 'native-base'

export default class ConfirmarTelefono extends Component {
  componentWillMount() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    const { confirmar, telefono } = this.props

    if (telefono) {
      return (
        <Item>
          <Button onPress={ confirmar }>
            <Text>Confirmar</Text>
          </Button>
        </Item>
      )
    }
    return null
  }
}

ConfirmarTelefono.propTypes = {
  telefono: PropTypes.string.isRequired,
  confirmar: PropTypes.func.isRequired
}
