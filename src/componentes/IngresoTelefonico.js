// Componente para el ingreso, por única vez, del número telefónico a contactar en caso de que haya posibilidad de donación.
import React, { Component } from 'react'
import { LayoutAnimation } from 'react-native'
import { Item, Input, Label } from 'native-base'

export default class IngresoTelefonico extends Component {

  componentWillMount() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    const { guardarTelefono } = this.props

    return (
      <Item floatingLabel >
        <Label>Ingresá el número de contacto</Label>
        <Input
          keyboardType={ 'number-pad' }
          onSubmitEditing={ (event) => guardarTelefono(event.nativeEvent.text) }
        />
      </Item>
    )
  }
}
