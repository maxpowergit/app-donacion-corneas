// Layout de Escena genérico según anatomía de native-base. Configura el Header
// según la escena.
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Footer, FooterTab } from 'native-base'
import { KeyboardAvoidingView } from 'react-native'

import HeaderDefault from './HeaderDefault'

import estilos from '../estilos/componentes/Escena'

const Escena = ({ children, navigation, footer, contentContainerStyle, ocultarHeader }) => (
  <Container>
    <KeyboardAvoidingView behavior="padding" flex={ 1 }>
      { !ocultarHeader
        && <HeaderDefault texto={ navigation.state.routeName } navigation={ navigation } />
      }
      <Content
        style={ estilos.contenido }
        contentContainerStyle={ contentContainerStyle }
      >
        { children }
      </Content>

      { footer && (
      <Footer>
        <FooterTab>
          { footer }
        </FooterTab>
      </Footer>
      ) }
    </KeyboardAvoidingView>
  </Container>
)

Escena.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  ocultarHeader: PropTypes.bool,
  contentContainerStyle: PropTypes.shape(),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

Escena.defaultProps = {
  footer: null,
  ocultarHeader: null,
  contentContainerStyle: null
}

export default Escena
