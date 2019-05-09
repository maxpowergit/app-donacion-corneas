import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label, Input } from 'native-base'

import estilos from '../estilos/componentes/DatoDonante'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
const DatoDonante = ({ label, onChange, value, ...props }) => (
  <Item stackedLabel>
    <Label style={ estilos.label }>{ label.toUpperCase() }</Label>

    <Input
      onChangeText={ onChange }
      value={ value }

      multiline
      keyboardType="default"
      blurOnSubmit

      { ...props }
    />
  </Item>
)

DatoDonante.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  returnKeyType: PropTypes.string
}

DatoDonante.defaultProps = {
  returnKeyType: 'next'
}

export default DatoDonante
