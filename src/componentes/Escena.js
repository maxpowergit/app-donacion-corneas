// Layout de Escena genérico según anatomía de native-base. Configura el Header
// según la escena.
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Footer, FooterTab } from 'native-base'
import { KeyboardAvoidingView } from 'react-native'

import HeaderDefault from './HeaderDefault'

import estilos from '../estilos/componentes/Escena'

const Escena = ({ children, navigation, footer, estilosContent }) => (
  <Container>
    <KeyboardAvoidingView behavior="padding" flex={ 1 }>
      <HeaderDefault texto={ navigation.state.routeName } navigation={ navigation } />

      <Content style={ [estilos.contenido, estilosContent] }>
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
  estilosContent: PropTypes.shape(),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

Escena.defaultProps = {
  estilosContent: null
}

export default Escena
