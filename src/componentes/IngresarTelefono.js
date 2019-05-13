// Componente para el ingreso, por única vez, del número telefónico a contactar
// en caso de que haya posibilidad de donación.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LayoutAnimation } from 'react-native'
import { Item, Input, Text, View } from 'native-base'

import estilos from '../estilos/componentes/IngresarTelefono'

export default class IngresarTelefono extends Component {
  componentWillMount() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    const { guardarTelefono, autoFocus, telefono } = this.props

    return (
      <View style={ estilos.contenedor }>
        <Text style={ estilos.label }>INGRESE EL TELÉFONO DE SU COORDINADOR HOSPITALARIO</Text>
        <Item style={ estilos.item }>
          <Input
            value={ telefono }
            style={ estilos.input }
            selectTextOnFocus
            onChange={ text => guardarTelefono(text.nativeEvent.text) }
            keyboardType="number-pad"
            autoFocus={ autoFocus }
            onSubmitEditing={ event => guardarTelefono(event.nativeEvent.text) }
          />
        </Item>
      </View>
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
