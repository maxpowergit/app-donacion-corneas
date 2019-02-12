// Componente para el ingreso, por única vez, del número telefónico a contactar en caso de que haya posibilidad de donación.

import React, { Component } from 'react'
import { AppRegistry, TextInput } from 'react-native'

export default class IngresoTelefonico extends Component {

  constructor(props) {
    super(props)
    this.state = { text: 'Ingresa el número de contacto' }
  }

  render() {
    return (
      <TextInput
        //Si borramos style entero quedará transparente.
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        keyboardType={'number-pad'}
        onChangeText={(text) => this.setState({text})}
        selectTextOnFocus={true}
        value={this.state.text}
      />
    )
  }
}

AppRegistry.registerComponent('AppDonacionCorneas', () => IngresoTelefonico);
