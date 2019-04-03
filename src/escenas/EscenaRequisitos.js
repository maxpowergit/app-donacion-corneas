import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Alert } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'

import mapaRequisitos from '../lib/mapaRequisitos'
import HeaderDefault from '../componentes/HeaderDefault'
import PreguntaRequisitos from '../componentes/PreguntaRequisitos'

class EscenaRequisitos extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <HeaderDefault texto={ navigation.state.routeName } />
  })

  componentDidUpdate() {
    const { requisitosCumplidos, donacionImposible, navigation } = this.props
    const { navigate } = navigation

    if (donacionImposible) {
      Alert.alert(
        'Requisitos',
        'Todos los requisitos son necesarios. La donación no es viable.',
      )
    }

    if (requisitosCumplidos) {
      Alert.alert(
        'Requisitos',
        'Todos los requisitos fueron cumplidos.',
        [
          { text: 'CONTINUAR', onPress: () => navigate('Contraindicaciones') }
        ]
      )
    }
  }

  render() {
    const { cumplirRequisito, requisitos } = this.props

    const preguntas = Object.keys(mapaRequisitos).map(llave => (
      <PreguntaRequisitos
        key={ llave }
        llave={ llave }
        texto={ mapaRequisitos[llave] }
        cumplir={ () => cumplirRequisito(llave, true) }
        incumplir={ () => cumplirRequisito(llave, false) }
        cumplido={ requisitos[llave] }
      />
    ))

    return (
      <Container>
        <View flex={ 1 } style={ estilos.contenedorPreguntas }>
          { preguntas }
        </View>
      </Container>
    )
  }
}

EscenaRequisitos.propTypes = {
  requisitosCumplidos: PropTypes.bool.isRequired,
  donacionImposible: PropTypes.bool.isRequired,
  requisitos: PropTypes.shape.isRequired,
  cumplirRequisito: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const estilos = StyleSheet.create({
  contenedorPreguntas: {
    justifyContent: 'space-around',
    padding: 8
  }
})

const mapStateToProps = ({ requisitos }) => {
  const donacionImposible = Object.values(requisitos).some(requisito => !requisito)
  const requisitosCumplidos = Object.values(requisitos).length === 4
    && Object.values(requisitos).every(requisito => requisito)

  return ({
    requisitos,
    donacionImposible,
    requisitosCumplidos
  })
}

const mapDispatchToProps = dispatch => ({
  cumplirRequisito: (llave, valor) => {
    dispatch({ type: 'REQUISITO_CUMPLIDO', llave, valor })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EscenaRequisitos)
