import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'

import mapaContraindicaciones from '../lib/mapaContraindicaciones'
import Escena from '../componentes/Escena'
import PreguntaContraindicaciones from '../componentes/PreguntaContraindicaciones'

import estilos from '../estilos/escenas/EscenaContraindicaciones'

class EscenaContraindicaciones extends Component {
  componentDidUpdate() {
    const { indicacionesCumplidas, donacionImposible, navigation } = this.props
    const { navigate } = navigation

    if (donacionImposible) {
      Alert.alert(
        'Contraindicacionesa',
        'Debido a esta contraindicación, la donación no es viable.',
      )
    }

    if (indicacionesCumplidas) {
      Alert.alert(
        'Contraindicaciones',
        'El paciente no tiene contraindicaciones',
        [
          { text: 'CONTINUAR', onPress: () => navigate('Contacto') }
        ]
      )
    }
  }

  render() {
    const { asignarContraindicacion, contraindicaciones, navigation } = this.props

    const preguntas = Object.keys(mapaContraindicaciones).map(llave => (
      <PreguntaContraindicaciones
        key={ llave }
        llave={ llave }
        texto={ llave }
        opciones={ mapaContraindicaciones[llave] }
        indicar={ () => asignarContraindicacion(llave, false) }
        contraindicar={ () => asignarContraindicacion(llave, true) }
        contraindicado={ !!contraindicaciones[llave] }
      />
    ))

    return (
      <Escena navigation={ navigation }>
        <ScrollView flex={ 1 } style={ estilos.contenedorPreguntas }>
          { preguntas }
        </ScrollView>
      </Escena>
    )
  }
}

EscenaContraindicaciones.propTypes = {
  indicacionesCumplidas: PropTypes.bool.isRequired,
  donacionImposible: PropTypes.bool.isRequired,
  contraindicaciones: PropTypes.shape().isRequired,
  asignarContraindicacion: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ contraindicaciones }) => {
  const donacionImposible = Object.values(contraindicaciones).some(
    contraindicacion => contraindicacion
  )
  const indicacionesCumplidas = Object.values(contraindicaciones).length === 9
    && Object.values(contraindicaciones).every(contraindicacion => !contraindicacion)

  return ({
    contraindicaciones,
    donacionImposible,
    indicacionesCumplidas
  })
}

const mapDispatchToProps = dispatch => ({
  asignarContraindicacion: (llave, valor) => {
    dispatch({ type: 'CONTRAINDICACION_ASIGNADA', llave, valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaContraindicaciones)
