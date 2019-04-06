import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Card, CardItem, Body, Button, Text } from 'native-base'

const PreguntaRequisitos = ({ texto, cumplir, incumplir, cumplido }) => (
  <Card>
    <CardItem>
      <Body>
        <Text style={ estilos.textoPregunta }>
          { texto }
        </Text>
      </Body>
    </CardItem>
    <CardItem footer style={ estilos.contenedorBotones }>
      <Button
        full
        danger={ cumplido === null || cumplido === false ? true : null }
        flex={ 1 }
        onPress={ () => incumplir() }
      >
        <Text style={ estilos.textoBoton }>NO</Text>
      </Button>
      <Button
        full
        success={ cumplido === null || cumplido === true ? true : null }
        flex={ 1 }
        onPress={ () => cumplir() }
      >
        <Text style={ estilos.textoBoton }>SI</Text>
      </Button>
    </CardItem>
  </Card>
)

PreguntaRequisitos.propTypes = {
  texto: PropTypes.string.isRequired,
  cumplir: PropTypes.func.isRequired,
  incumplir: PropTypes.func.isRequired,
  cumplido: PropTypes.bool
}

PreguntaRequisitos.defaultProps = {
  cumplido: null
}

const estilos = StyleSheet.create({
  contenedorBotones: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  },
  textoBoton: {
    color: 'white',
    fontSize: 16
  },
  textoPregunta: {
    color: 'black',
    fontSize: 18
  }
})

export default PreguntaRequisitos
