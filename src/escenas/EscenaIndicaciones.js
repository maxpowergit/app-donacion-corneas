// En esta escena hacemos recomendaciones sobre qué hacer con el Donante
// después de haber notificado al Coordinador Hospitalario.
import React, { Component } from 'react'
import { Text } from 'react-native'
import {
  Container, Grid, Row, Content
} from 'native-base'

class EscenaIndicaciones extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Content>
              <Text>Alguna recomendación</Text>
            </Content>
          </Row>
        </Grid>
      </Container>
    )
  }
}

export default EscenaIndicaciones
