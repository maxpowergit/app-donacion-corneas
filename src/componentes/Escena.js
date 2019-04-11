// Layout de Escena genérico según anatomía de native-base. Configura el Header
// según la escena.
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content } from 'native-base'
import { KeyboardAvoidingView } from 'react-native'

import HeaderDefault from './HeaderDefault'

const Escena = ({ children, navigation }) => (
  <Container>
    <HeaderDefault texto={ navigation.state.routeName } />
    <KeyboardAvoidingView behavior="padding" flex={ 1 }>
      <Content>
        { children }
      </Content>
    </KeyboardAvoidingView>
  </Container>
)

Escena.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default Escena
