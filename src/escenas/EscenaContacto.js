// En esta escena notificamos del Potencial Donante de Córneas al Coordinador
// Hospitalario de Trasplante mediante la composición de un SMS que le usuarie
// tiene que terminar de enviar usando la aplicación default de SMSs del
// teléfono.
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Grid, Row, Content, Item, Label, Button } from 'native-base'
import { connect } from 'react-redux'
import { SMS } from 'expo';

class EscenaContacto extends Component {
  async enviarSMS(telefono) {
    const { result } = await SMS.sendSMSAsync(telefono, 'Se murió alguien');

    // TODO Cuando terminamos de esperar, result es 'unknown' debido a
    // políticas de Google Play. Podemos asumir que al volver del async/await
    // el mensaje fue enviado, y acá guardar en el store 'notificado: true' o
    // algo así.
  }

  render() {
    const { telefono } = this.props

    return (
      <Container>
        <Grid>
          <Row style={ estilos.centrado }>
            <Content>
              <Button onPress={ () => this.enviarSMS(telefono) }>
                <Text>Preparar notificación</Text>
              </Button>
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
