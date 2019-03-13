import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Container, Content, Form } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { connect } from 'react-redux'

import LogoFadeIn from '../componentes/LogoFadeIn.js'
import IngresoTelefonico from '../componentes/IngresoTelefonico.js'

class EscenaIngreso extends Component {
  constructor(props) {
    super(props)
  }

  navegarSiHayTelefono() {
    const { telefono, cambiarTiempoTranscurrido } = this.props

		if (telefono) {
      return (
        this.props.navigation.navigate('Requisitos')
      )
    } else {
      cambiarTiempoTranscurrido(true)
    }
  }

  mostrarTelefono() {
    const { telefono, guardarTelefono, tiempoTranscurrido } = this.props

    if (!telefono && tiempoTranscurrido) {
      return (
        <IngresoTelefonico texto={ telefono } guardarTelefono= { guardarTelefono } />
      )
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <KeyboardAvoidingView behavior="padding" flex= { 1 } >
            <Row style={ estilos.centrado } >
              <Content>
                <Form style={ estilos.centrado } >
                  <LogoFadeIn duracion={ 3500 } callback ={ () => { this.navegarSiHayTelefono() }}/>

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

const estilos = StyleSheet.create({
  centrado: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00CE9F'
  }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(EscenaIngreso)
