import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from 'native-base'

import estilos from '../estilos/componentes/CheckBox'

const CheckBox = ({ onPress, estilo }) => (
  <Button
    style={ estilos.boton }
    onPress={ onPress }
  >
    <Icon name="md-checkmark" style={ estilo } />
  </Button>
)

CheckBox.propTypes = {
  onPress: PropTypes.func.isRequired,
  estilo: PropTypes.shape({
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired
  }).isRequired
}

export default CheckBox
