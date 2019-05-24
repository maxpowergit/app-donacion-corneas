import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Text } from 'native-base'

import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'
import paquete from '../../package.json'

import estilos from '../estilos/escenas/AcercaDe'

const AcercaDe = ({ navigation }) => {
  const botonFooter = (
    <BotonFooter
      texto="Volver"
      onPress={ () => navigation.goBack() }
    />
  )

  return (
    <Escena
      navigation={ navigation }
      footer={ botonFooter }
      contentContainerStyle={ estilos.centrado }
      ocultarHeader
    >
      <Icon
        name="info"
        style={ estilos.icono }
        type="MaterialIcons"
      />

      <Text style={ estilos.texto }>
        {
          'ProcCorn es un desarrollo de MuaDev en colaboración con la "Unidad de Procuración de Órganos y Tejidos - Hospital César Milstein"'
        }
      </Text>
      <Text style={ estilos.textoVersion }>
          Versión
        {' '}
        { paquete.version }
      </Text>

    </Escena>
  )
}

AcercaDe.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default AcercaDe
