import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'native-base'
import { connect } from 'react-redux'

import IngresarTelefono from '../componentes/IngresarTelefono'
import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'

import { colores } from '../estilos/Base'
import estilos from '../estilos/escenas/Telefono'

const Telefono = ({ navigation, telefono, guardarTelefono }) => {
  const botonFooter = (
    <BotonFooter
      texto="Listo"
      onPress={ () => navigation.goBack() }
    />
  )

  return (
    <Escena navigation={ navigation } footer={ botonFooter } estilosContent= {{ backgroundColor: colores.terciario }} >
      <Form style={ estilos.centrado }>
        <IngresarTelefono guardarTelefono={ guardarTelefono } autoFocus telefono={ telefono } />
      </Form>
    </Escena>
  )
}

Telefono.propTypes = {
  guardarTelefono: PropTypes.func.isRequired,
  telefono: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ telefono }) => ({
  telefono
})

const mapDispatchToProps = dispatch => ({
  guardarTelefono: (telefono) => {
    dispatch({ type: 'GUARDAR_TELEFONO', telefono })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Telefono)
