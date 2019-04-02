import React, { Component } from 'react'
import { StyleSheet, ScrollView, Alert } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'

import HeaderDefault from '../componentes/HeaderDefault.js'
import PreguntaContraindicaciones from '../componentes/PreguntaContraindicaciones.js'
import mapaContraindicaciones from '../lib/mapaContraindicaciones.js'

class EscenaContraindicaciones extends Component {

  static navigationOptions = ({ navigation }) => {
    return ({
      header: <HeaderDefault texto={ navigation.state.routeName } />
    })
  }

  componentDidUpdate() {
    const { indicacionesCumplidas, donacionImposible, navigation } = this.props
    const { navigate } = navigation

    if (donacionImposible) {
      Alert.alert(
        'Contraindicacionesa',
        'Debido a esta contraindicación, la donación no es viable.',
      )
    }

    if (indicacionesCumplidas) {
      Alert.alert(
        'Contraindicaciones',
        'El paciente no tiene contraindicaciones',
        [
          { text: 'CONTINUAR', onPress: () => navigate('Contacto') }
        ]
      )
    }
  }




  render() {
    const { asignarContraindicacion, contraindicaciones } = this.props
    const preguntas = Object.keys(mapaContraindicaciones).map(llave => (
      <PreguntaContraindicaciones
        key={ llave }
        llave={ llave }
        texto={ llave }
        opciones= { mapaContraindicaciones[llave] }
        indicar= { () => asignarContraindicacion(llave, false) }
        contraindicar= { () => asignarContraindicacion(llave, true) }
        contraindicado= { contraindicaciones[llave] }
      />
    ))

    return (
      <Container>
        <ScrollView flex= { 1 } style= {estilos.contenedorPreguntas}>
          { preguntas }
        </ScrollView>
      </Container>
    )
  }
}

const estilos = StyleSheet.create({
  contenedorPreguntas: {
    padding: 8,
  },
})

const mapStateToProps = ({ contraindicaciones }) => {
  const donacionImposible = Object.values(contraindicaciones).some((contraindicaciones) => contraindicaciones)
  const indicacionesCumplidas = Object.values(contraindicaciones).length == 9 && Object.values(contraindicaciones).every((contraindicacion) => !contraindicacion)

  return ({
    contraindicaciones,
    donacionImposible,
    indicacionesCumplidas
  })
}

const mapDispatchToProps = dispatch => ({
  //TODO Convertir a JS del futuro.
  asignarContraindicacion: (llave, valor) => {
    dispatch({ type: 'CONTRAINDICACION_ASIGNADA', llave: llave, valor: valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaContraindicaciones)
