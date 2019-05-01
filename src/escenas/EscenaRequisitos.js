import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import mapaRequisitos from '../lib/mapaRequisitos'
import Escena from '../componentes/Escena'
import Pregunta from '../componentes/Pregunta'
import BotonFooter from '../componentes/BotonFooter'

class EscenaRequisitos extends Component {
  render() {
    const { cumplirRequisito, requisitos, requisitosCumplidos, navigation } = this.props
    const { navigate } = navigation

    const preguntas = Object.keys(mapaRequisitos).map(llave => (
      <Pregunta
        key={ llave }
        llave={ llave }
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
        onPress={ () => navigate('Contraindicaciones') }
        texto={ boton }
        disabled={ !requisitosCumplidos }
      />
    )

    return (
      <Escena navigation={ navigation } footer={ botonFooter }>
        { preguntas }
      </Escena>
    )
  }
}

EscenaRequisitos.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EscenaRequisitos)
