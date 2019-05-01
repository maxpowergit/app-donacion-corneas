import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView } from 'react-native'
import { Container, Content, Form } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { connect } from 'react-redux'

import LogoFadeIn from '../componentes/LogoFadeIn'
import IngresarTelefono from '../componentes/IngresarTelefono'
import ConfirmarTelefono from '../componentes/ConfirmarTelefono'

import estilos from '../estilos/escenas/Ingreso'

class Ingreso extends Component {
  navegarSiHayTelefono() {
    const { telefono, cambiarTiempoTranscurrido, navigation } = this.props

    if (telefono) {
      navigation.navigate('requisitos')
    } else {
      cambiarTiempoTranscurrido(true)
    }
  }

  mostrarTelefono() {
    const {
      telefono, guardarTelefono, tiempoTranscurrido, navigation
    } = this.props

    if (tiempoTranscurrido) {
      return (
        <>
          <IngresarTelefono telefono={ telefono } guardarTelefono={ guardarTelefono } />
          <ConfirmarTelefono telefono={ telefono } confirmar={ () => navigation.navigate('requisitos') } />
        </>
      )
    }

    return null
  }

  render() {
    return (
      <Container>
        <Grid>
          <KeyboardAvoidingView behavior="padding" flex={ 1 }>
            <Row style={ estilos.centrado }>
              <Content>
                <Form style={ estilos.centrado }>
                  <LogoFadeIn
                    duracion={ 3500 }
                    callback={ () => { this.navegarSiHayTelefono() } }
                  />

                  { this.mostrarTelefono() }
                </Form>
              </Content>
            </Row>
          </KeyboardAvoidingView>
        </Grid>
      </Container>
    )
  }
}

Ingreso.propTypes = {
  telefono: PropTypes.string.isRequired,
  tiempoTranscurrido: PropTypes.bool.isRequired,
  guardarTelefono: PropTypes.func.isRequired,
  cambiarTiempoTranscurrido: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ telefono, tiempoTranscurrido }) => ({
  telefono,
  tiempoTranscurrido
})

const mapDispatchToProps = dispatch => ({
  guardarTelefono: (telefono) => {
    dispatch({ type: 'GUARDAR_TELEFONO', telefono })
  },
  cambiarTiempoTranscurrido: (tiempoTranscurrido) => {
    dispatch({ type: 'TIEMPO_TRANSCURRIDO', tiempoTranscurrido })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Ingreso)
