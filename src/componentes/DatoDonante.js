import React, { Component } from 'react'
import { Item, Label, Input } from 'native-base'

class DatoDonante extends Component {
  render() {
    const { label, onChange, value } = this.props

    return (
      <Item floatingLabel>
        <Label style={ { textTransform: 'uppercase'} }>{ label }</Label>

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
