// Componente para el ingreso, por única vez, del número telefónico a contactar en caso de que haya posibilidad de donación.
import React, { Component } from 'react'
import { AppRegistry, TextInput, LayoutAnimation } from 'react-native'
import { Item, Input, Label } from 'native-base'

export default class IngresoTelefonico extends Component {

  constructor(props) {
    super(props)
    this.state = { text: 'Ingresa el número de contacto', tiempTranscurrido: false }
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
		setTimeout(() => {this.setState({tiempoTranscurrido: true})}, 2500)
		if (this.state.tiempoTranscurrido) {
    	return (
				<Item floatingLabel >
      		<Label>Ingresa el número de contacto</Label>
        	<Input keyboardType={'number-pad'} />
      	</Item>
    	)
  	} else {
			return null
		}
	}
}
