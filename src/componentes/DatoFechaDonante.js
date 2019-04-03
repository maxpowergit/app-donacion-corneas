import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label, DatePicker } from 'native-base'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
const DatoFechaDonante = ({ label, onChange, value, ...props }) => (
  <Item stackedLabel>
    <Label style={ { textTransform: 'uppercase' } }>{ label.toUpperCase() }</Label>

    <DatePicker
      { ...props }

      defaultDate={ new Date() }
      minimumDate={ new Date(1910, 1, 1) }
      maximumDate={ new Date() }
      locale="es"
      animationType="fade"
      androidMode="spinner"
      placeHolderText="DD/MM/AAAA"
      placeHolderTextStyle={ { color: '#d3d3d3' } }

      onDateChange={ onChange }
    />
  </Item>
)

DatoFechaDonante.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default DatoFechaDonante
