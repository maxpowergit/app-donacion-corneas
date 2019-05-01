import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text } from 'native-base'

import estilos from '../estilos/componentes/BotonFooter'

const BotonFooter = ({ onPress, texto, disabled }) => (
  <Button
    full
    onPress={ onPress }
    disabled={ disabled }
  >
    <Text style={ estilos.texto }>
      { texto.toUpperCase() }
    </Text>
  </Button>
)

BotonFooter.propTypes = {
  onPress: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

BotonFooter.defaultProps = {
  disabled: false
}

export default BotonFooter
