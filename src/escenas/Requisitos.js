import React from 'react'
import { BackHandler } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AndroidBackHandler } from 'react-navigation-backhandler'

import mapaRequisitos from '../lib/mapaRequisitos'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'
import BotonFooter from '../componentes/BotonFooter'

const Requisitos = ({ cumplirRequisito, requisitos, requisitosCumplidos, navigation }) => {
  const { navigate } = navigation

  const onBackButtonPressAndroid = () => {
    BackHandler.exitApp()
    return true
  }

  const preguntas = Object.keys(mapaRequisitos).map(llave => (
    <Pregunta
      key={ llave }
      texto={ mapaRequisitos[llave] }
      marcar={ () => cumplirRequisito(llave, true) }
      desmarcar={ () => cumplirRequisito(llave, false) }
      marcada={ requisitos[llave] }
    />
  ))

  let boton = 'No cumple los requisitos'
  if (requisitosCumplidos) {
    boton = 'Continuar protocolo'
  }

  const botonFooter = (
    <BotonFooter
      onPress={ () => navigate('contraindicaciones') }
      texto={ boton }
      disabled={ !requisitosCumplidos }
    />
  )

  return (
    <AndroidBackHandler onBackPress={ onBackButtonPressAndroid }>
      <Escena navigation={ navigation } footer={ botonFooter } header>
        { preguntas }
      </Escena>
    </AndroidBackHandler>
  )
}

Requisitos.propTypes = {
  requisitosCumplidos: PropTypes.bool.isRequired,
  requisitos: PropTypes.shape().isRequired,
  cumplirRequisito: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ requisitos }) => {
  const requisitosCumplidos = Object.values(requisitos).length === 4
    && Object.values(requisitos).every(requisito => requisito)

  return ({
    requisitos,
    requisitosCumplidos
  })
}

const mapDispatchToProps = dispatch => ({
  cumplirRequisito: (llave, valor) => {
    dispatch({ type: 'REQUISITO_CUMPLIDO', llave, valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Requisitos)
