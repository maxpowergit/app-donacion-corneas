import React, { Component } from 'react'
import { Item, Label, Input } from 'native-base'

class DatoDonante extends Component {
  render() {
    const { label, onChange, value } = this.props

    //TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
    return (
      <Item floatingLabel>
        <Label style={ { textTransform: 'uppercase'} }>{ label.toUpperCase() }</Label>

        <Input
          { ...this.props }

          onChangeText={ onChange }
          value={ value }
        />
      </Item>
    )
  }
}

export default DatoDonante
