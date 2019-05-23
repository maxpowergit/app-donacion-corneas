// En esta escena hacemos recomendaciones sobre qué hacer con el Donante
// después de haber notificado al Coordinador Hospitalario.
import React from 'react'
import PropTypes from 'prop-types'
import RNExitApp from 'react-native-exit-app'

import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'
import Indicacion from '../componentes/Indicacion'

import mapaIndicaciones from '../lib/mapaIndicaciones'

const Indicaciones = ({ navigation }) => {
  const botonFooter = (
    <BotonFooter
      onPress={ () => RNExitApp.exitApp() }
      texto="Salir"
    />
  )

  const listaIndicaciones = mapaIndicaciones.map(indicacion => (
    <Indicacion key={ indicacion }>
      { indicacion }
    </Indicacion>
  ))

  return (
    <Escena navigation={ navigation } footer={ botonFooter }>
      { listaIndicaciones }
    </Escena>
  )
}

Indicaciones.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default Indicaciones
