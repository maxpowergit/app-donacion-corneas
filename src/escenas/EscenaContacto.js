// En esta escena notificamos del Potencial Donante de Córneas al Coordinador
// Hospitalario de Trasplante mediante la composición de un SMS que le usuarie
// tiene que terminar de enviar usando la aplicación default de SMSs del
// teléfono.
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Grid, Row, Content, Form, Item, Label, Input, Button } from 'native-base'
import { connect } from 'react-redux'
import { SMS } from 'expo';

class EscenaContacto extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      apellido: '',
      dni: '',
      fechaNacimiento: '',
      fechaIngreso: '',
      horaPCR: '',
      causaMuerte: '',
      servicio: ''
    }
  }

  async enviarSMS(telefono, mensaje) {
    const { result } = await SMS.sendSMSAsync(telefono, mensaje);

    // TODO Cuando terminamos de esperar, result es 'unknown' debido a
    // políticas de Google Play. Podemos asumir que al volver del async/await
    // el mensaje fue enviado, y acá guardar en el store 'notificado: true' o
    // algo así.
  }

  mensaje() {
    const { nombre, apellido } = this.state

    const campos = [
      `Nombre: ${nombre}`,
      `Nombre: ${apellido}`
    ]

    console.log(campos.join("\n"))
    return campos.join("\n")
  }

  render() {
    const { telefono } = this.props
    const { nombre, apellido } = this.state

    return (
      <Container>
        <Grid>
          <Row style={ estilos.centrado }>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Nombre</Label>
                  <Input
                    onChangeText={ (text) => this.setState({ nombre: text }) }
                    value={ nombre }
                  />
                </Item>

                <Item floatingLabel>
                  <Label>Apellido</Label>
                  <Input
                    onChangeText={ (text) => this.setState({ apellido: text }) }
                    value={ apellido }
                  />
                </Item>

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
