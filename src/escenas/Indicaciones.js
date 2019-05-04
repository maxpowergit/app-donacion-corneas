// En esta escena hacemos recomendaciones sobre qué hacer con el Donante
// después de haber notificado al Coordinador Hospitalario.
import React from 'react'
import { BackHandler } from 'react-native'
import PropTypes from 'prop-types'
import { Text } from 'native-base'

import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'

const Indicaciones = ({ navigation }) => {
  const botonFooter = (
    <BotonFooter
      onPress={ () => BackHandler.exitApp() }
      texto="Salir"
    />
  )

  return (
    <Escena navigation={ navigation } footer={ botonFooter }>
      <Text>Alguna recomendación</Text>
    </Escena>
  )
}

Indicaciones.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default Indicaciones
