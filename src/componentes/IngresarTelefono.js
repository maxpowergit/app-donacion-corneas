// Componente para el ingreso, por única vez, del número telefónico a contactar
// en caso de que haya posibilidad de donación.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LayoutAnimation } from 'react-native'
import { Item, Input, Label } from 'native-base'

export default class IngresarTelefono extends Component {
  componentWillMount() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    const { guardarTelefono, autoFocus, telefono } = this.props

    return (
      <Item floatingLabel>
        <Label>TELÉFONO DEL COORDINADOR HOSPITALARIO</Label>
        <Input
          value={ telefono }
          selectTextOnFocus
          onChange={ text => guardarTelefono(text.nativeEvent.text) }
          keyboardType="number-pad"
          autoFocus={ autoFocus }
          onSubmitEditing={ event => guardarTelefono(event.nativeEvent.text) }
        />
      </Item>
    )
  }
}

IngresarTelefono.propTypes = {
  guardarTelefono: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  telefono: PropTypes.string.isRequired
}

IngresarTelefono.defaultProps = {
  autoFocus: false
}
