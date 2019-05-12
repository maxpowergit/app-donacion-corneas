import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import mapaContraindicaciones from '../lib/mapaContraindicaciones'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'
import BotonFooter from '../componentes/BotonFooter'

const Contraindicaciones = ({ contraindicaciones, sinContraindicaciones, navigation }) => {
  const { navigate } = navigation

  const preguntas = Object.keys(mapaContraindicaciones).map(llave => (
    <Pregunta
      key={ llave }
      texto={ mapaContraindicaciones[llave].pregunta }
      marcar={ () => navigate('contraindicacion', { llave }) }
      desmarcar={ () => navigate('contraindicacion', { llave }) }
      marcada={ contraindicaciones[llave] }
    />
  ))

  let boton = 'Continuar protocolo'
  if (!sinContraindicaciones) {
    boton = 'Tiene contraindicaciones'
  }

  const botonFooter = (
    <BotonFooter
      onPress={ () => navigate('contacto') }
      texto={ boton }
      disabled={ !sinContraindicaciones }
    />
  )

  return (
    <Escena navigation={ navigation } footer={ botonFooter } header>
      { preguntas }
    </Escena>
  )
}

Contraindicaciones.propTypes = {
  sinContraindicaciones: PropTypes.bool.isRequired,
  contraindicaciones: PropTypes.shape().isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ contraindicaciones }) => {
  const categorias = Object.keys(contraindicaciones).reduce(
    (objeto, llave) => ({
      ...objeto,
      [llave]: contraindicaciones[llave].some(value => value)
    }),
    {}
  )

  const sinContraindicaciones = Object.values(categorias).every(
    contraindicacion => !contraindicacion
  )

  return ({
    contraindicaciones: categorias,
    sinContraindicaciones
  })
}

export default connect(mapStateToProps)(Contraindicaciones)
