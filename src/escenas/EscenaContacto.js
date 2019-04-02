// En esta escena notificamos del Potencial Donante de Córneas al Coordinador
// Hospitalario de Trasplante mediante la composición de un SMS que le usuarie
// tiene que terminar de enviar usando la aplicación default de SMSs del
// teléfono.
import React, { Component } from 'react'
import { StyleSheet, Text, Alert } from 'react-native'
import { Container, Grid, Row, Content, Form, Item, Label, Input, Button } from 'native-base'
import { connect } from 'react-redux'
import { SMS } from 'expo';

import DatoDonante from '../componentes/DatoDonante'

class EscenaContacto extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      apellido: '',
      dni: '',
      fechaNacimiento: '',
      fechaIngreso: '',
      fechaHoraPCR: '',
      causaMuerte: '',
      servicio: ''
    }
  }

  async enviarSMS(telefono, mensaje) {
    const { result } = await SMS.sendSMSAsync(telefono, mensaje);

    // Cuando terminamos de esperar, en Android result es 'unknown' debido a
    // políticas de Google Play. En iOS puede ser 'sent' o 'cancelled'.
    if (result && result != 'cancelled') {
      // Podemos asumir que al volver del async/await el mensaje fue enviado.
      Alert.alert(
        'Listo!',
        'El Coordinador Hospitalario ha sido notificado'
      )
    }
  }

  mensaje() {
    const {
      nombre, apellido, dni, fechaNacimiento, fechaIngreso, fechaHoraPCR, causaMuerte, servicio
    } = this.state

    const campos = [
      `Nombre: ${nombre}`,
      `Apellido: ${apellido}`,
      `Documento: ${dni}`,
      `Fecha de Nacimiento: ${fechaNacimiento}`,
      `Fecha de Ingreso: ${fechaIngreso}`,
      `Fecha y hora del PCR: ${fechaHoraPCR}`,
      `Causa de Muerte: ${causaMuerte}`,
      `Servicio: ${servicio}`,
    ]

    return campos.join("\n")
  }

  render() {
    const { telefono } = this.props
    const {
      nombre, apellido, dni, fechaNacimiento, fechaIngreso, fechaHoraPCR, causaMuerte, servicio
    } = this.state

    return (
      <Container>
        <Grid>
          <Row style={ estilos.centrado }>
            <Content>
              <Form>
                <DatoDonante
                  label='nombre'
                  value={ nombre }
                  onChange={ (text) => this.setState({ nombre: text }) }
                  autoFocus={ true }
                />
                <DatoDonante
                  label='apellido'
                  value={ apellido }
                  onChange={ (text) => this.setState({ apellido: text }) }
                />
                <DatoDonante
                  label='tipo y nro de documento'
                  value={ dni }
                  onChange={ (text) => this.setState({ dni: text }) }
                />
                <DatoDonante
                  label='fecha de nacimiento'
                  value={ fechaNacimiento }
                  onChange={ (text) => this.setState({ fechaNacimiento: text }) }
                />
                <DatoDonante
                  label='fecha de ingreso'
                  value={ fechaIngreso }
                  onChange={ (text) => this.setState({ fechaIngreso: text }) }
                />
                <DatoDonante
                  label='fecha y hora del pcr'
                  value={ fechaHoraPCR }
                  onChange={ (text) => this.setState({ fechaHoraPCR: text }) }
                />
                <DatoDonante
                  label='causa de muerte'
                  value={ causaMuerte }
                  onChange={ (text) => this.setState({ causaMuerte: text }) }
                />
                <DatoDonante
                  label='servicio'
                  value={ servicio }
                  onChange={ (text) => this.setState({ servicio: text }) }
                />

                <Button onPress={ () => this.enviarSMS(telefono, this.mensaje()) }>
                  <Text>Preparar notificación</Text>
                </Button>
              </Form>
            </Content>
          </Row>
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

export default connect(mapStateToProps)(EscenaContacto)
