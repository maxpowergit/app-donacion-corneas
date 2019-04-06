// En esta escena hacemos recomendaciones sobre qué hacer con el Donante
// después de haber notificado al Coordinador Hospitalario.
import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'native-base'

import Escena from '../componentes/Escena'

const EscenaIndicaciones = ({ navigation }) => (
  <Escena navigation={ navigation }>
    <Text>Alguna recomendación</Text>
  </Escena>
)

EscenaIndicaciones.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default EscenaIndicaciones
