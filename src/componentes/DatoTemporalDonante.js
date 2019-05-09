import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label, Input } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'

import estilos from '../estilos/componentes/DatoTemporalDonante'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
// deshabilitar keyboard onPress
const DatoTemporalDonante = ({ label, value, visible, onPress, onChange, onCancel, ...props }) => (
  <Item stackedLabel onPress={ onPress }>
    <Label style={ estilos.label }>{ label.toUpperCase() }</Label>

    <Input style={ estilos.input } disabled value={ value } />
    <DateTimePicker
      { ...props }
      isVisible={ visible }
      date={ new Date(value) }

      onConfirm={ onChange }
      onCancel={ onCancel }
    />
  </Item>
)

DatoTemporalDonante.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['date', 'time', 'datetime'])
}

DatoTemporalDonante.defaultProps = {
  mode: 'date'
}

export default DatoTemporalDonante
