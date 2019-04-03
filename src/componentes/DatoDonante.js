import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label, Input } from 'native-base'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
const DatoDonante = ({ label, onChange, value, ...props }) => (
  <Item floatingLabel>
    <Label style={ { textTransform: 'uppercase' } }>{ label.toUpperCase() }</Label>

    <Input
      { ...props }

      onChangeText={ onChange }
      value={ value }
    />
  </Item>
)

DatoDonante.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default DatoDonante
