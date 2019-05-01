// Layout de Escena genérico según anatomía de native-base. Configura el Header
// según la escena.
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Footer, FooterTab } from 'native-base'
import { KeyboardAvoidingView } from 'react-native'

import { colores } from '../estilos/Base'
import HeaderDefault from './HeaderDefault'

const Escena = ({ children, navigation, footer }) => (
  <Container>
    <KeyboardAvoidingView behavior="padding" flex={ 1 }>
      <HeaderDefault texto={ navigation.state.routeName } />
      <Content style={ { backgroundColor: colores.secundario } }>
        { children }
      </Content>
      <Footer>
        <FooterTab>
          { footer }
        </FooterTab>
      </Footer>
    </KeyboardAvoidingView>
  </Container>
)

Escena.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default Escena
