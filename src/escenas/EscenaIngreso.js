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
    this.state = { tiempTranscurrido: false }
  }

  mostrarTelefono() {
    //FIXME esto aunque funciona está disparando un warning.
    setTimeout(() => {this.setState({tiempoTranscurrido: true})}, 2500)

		if (this.state.tiempoTranscurrido && !this.props.telefono) {
      return (
        <IngresoTelefonico texto= {this.props.telefono}/>
      )
    } else if (this.state.tiempoTranscurrido && this.props.telefono) {
      return (
        this.props.navigation.navigate('Requisitos')
      )
    } else {
      return null
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
                  <LogoFadeIn duracion={ 2000 } />
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

const mapStateToProps = ({ telefono }) => ({
  telefono
})

export default connect(mapStateToProps)(EscenaIngreso)
