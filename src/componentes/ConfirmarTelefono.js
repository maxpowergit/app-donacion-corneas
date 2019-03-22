// Componente para confirmar la correctitud del número telfónico ingresado.
import React, { Component } from 'react'
import { LayoutAnimation, Text } from 'react-native'
import { Item, Button } from 'native-base'

export default class ConfirmarTelefono extends Component {

  componentWillMount() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    const { confirmar, telefono } = this.props

    if (telefono) {
      return (
        <Item>
          <Button onPress={ confirmar } >
            <Text>Confirmar</Text>
          </Button>
       </Item>
      )
    } else {
      return null
    }
  }
}
