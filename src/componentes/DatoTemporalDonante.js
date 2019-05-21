import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label, Input } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import 'moment/locale/es'

import estilos from '../estilos/componentes/DatoTemporalDonante'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
// deshabilitar keyboard onPress
const DatoTemporalDonante = ({ label, value, visible, onPress, onChange, onCancel, ...props }) => {
  // Parseamos la fecha según los posibles formatos.
  const parsedDate = moment(value, [
    moment.localeData().longDateFormat('LL'),
    moment.localeData().longDateFormat('LLL')
  ])

  // Sólo usamos fechas válidas.
  const validDate = parsedDate.isValid() ? parsedDate.toDate() : new Date()

  return (
    <Item stackedLabel onPress={ onPress } style={ estilos.item }>
      <Label style={ estilos.label }>{ label.toUpperCase() }</Label>

      <Input style={ estilos.input } disabled value={ value } />
      <DateTimePicker
        onConfirm={ onChange }
        onCancel={ onCancel }
        date={ validDate }
        isVisible={ visible }

        { ...props }
      />
    </Item>
  )
}

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
