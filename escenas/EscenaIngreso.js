import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Container, Content, Form } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import LogoFadeIn from '../componentes/LogoFadeIn.js'
import IngresoTelefonico from '../componentes/IngresoTelefonico.js'

export default class EscenaIngreso extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <KeyboardAvoidingView behavior="padding" flex= { 1 } >
            <Row style={ estilos.centrado } >
              <Content>
                <Form style={ estilos.centrado } >
                  <LogoFadeIn duracion={ 2000 } />
                  <IngresoTelefonico/>
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
