// Layout de Escena genérico según anatomía de native-base. Configura el Header
// según la escena.
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Footer, FooterTab } from 'native-base'
import { KeyboardAvoidingView } from 'react-native'

import HeaderDefault from './HeaderDefault'

import estilos from '../estilos/componentes/Escena'

const Escena = ({ children, navigation, footer, contentContainerStyle, ocultarHeader }) => {
  const { routeName, params } = navigation.state
  // Por default usamos la ruta como título del Header, a menos que pasemos uno
  // al navegar a la escena.
  const titulo = (params && params.titulo) || routeName

  return (
    <Container>
      <KeyboardAvoidingView flex={ 1 }>
        { !ocultarHeader
          && <HeaderDefault texto={ titulo } navigation={ navigation } />
        }
        <Content
          style={ estilos.contenido }
          contentContainerStyle={ contentContainerStyle }
        >
          { children }
        </Content>

        { footer && (
        <Footer>
          <FooterTab style={ estilos.footerTab }>
            { footer }
          </FooterTab>
        </Footer>
        ) }
      </KeyboardAvoidingView>
    </Container>
  )
}

Escena.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  ocultarHeader: PropTypes.bool,
  contentContainerStyle: PropTypes.shape(),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        titulo: PropTypes.string
      })
    })
  }).isRequired
}

Escena.defaultProps = {
  footer: null,
  ocultarHeader: false,
  contentContainerStyle: null
}

export default Escena
