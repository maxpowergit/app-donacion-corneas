// Esta escena es para mostrar cada contraindicación con sus subitems, desde la
// lista de contraindicaciones, y confirmar que el donante tiene alguna
// contraindicación, o ninguna de las opciones presentadas.
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { H2 } from 'native-base'

import mapaContraindicaciones from '../lib/mapaContraindicaciones'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'
import BotonFooter from '../componentes/BotonFooter'

const Contraindicacion = ({ contraindicaciones, asignarContraindicacion, navigation }) => {
  const { llave } = navigation.state.params
  const { pregunta, opciones } = mapaContraindicaciones[llave]

  const preguntas = opciones.map((opcion, index) => (
    <Pregunta
      key={ opcion }
      texto={ opcion }
      marcar={ () => asignarContraindicacion(llave, index, true) }
      desmarcar={ () => asignarContraindicacion(llave, index, false) }
      marcada={ contraindicaciones[index] }
    />
  ))

  const botonFooter = (
    <BotonFooter
      onPress={ () => navigation.goBack() }
      texto={ contraindicaciones.some(marcada => marcada) ? 'Volver' : 'Ninguna' }
    />
  )

  return (
    <Escena navigation={ navigation } footer={ botonFooter }>
      <H2>{ pregunta }</H2>

      { preguntas }
    </Escena>
  )
}

Contraindicacion.propTypes = {
  contraindicaciones: PropTypes.arrayOf(PropTypes.bool).isRequired,
  asignarContraindicacion: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        llave: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

const mapStateToProps = ({ contraindicaciones }, { navigation }) => {
  const { llave } = navigation.state.params

  return ({
    contraindicaciones: contraindicaciones[llave]
  })
}

const mapDispatchToProps = dispatch => ({
  asignarContraindicacion: (llave, opcion, valor) => {
    dispatch({ type: 'CONTRAINDICACION_ASIGNADA', llave, opcion, valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Contraindicacion)
