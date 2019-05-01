import React from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Body, Right, Button, Icon, Text } from 'native-base'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'

import estilos from '../estilos/componentes/HeaderDefault'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
const HeaderDefault = ({ texto, navigation }) => {
  const { navigate } = navigation

  return (
    <Header style={ estilos.header }>
      <Left style={ estilos.left } />

      <Body style={ estilos.body }>
        <Text style={ estilos.textoHeader }>
          { texto.toUpperCase() }
        </Text>
      </Body>

      <Right style={ estilos.right }>
        <Menu>
          <MenuTrigger>
            { /* Botón deshabilitado porque el manejo del touch lo hace MenuTrigger */ }
            <Button transparent disabled>
              <Icon name="more" style={ estilos.iconoHeader } />
            </Button>
          </MenuTrigger>

          <MenuOptions>
            <MenuOption onSelect={ () => navigate('telefono') }>
              <Text>Cambiar teléfono</Text>
            </MenuOption>

            <MenuOption onSelect={ () => navigate('telefono') }>
              <Text>Acerca de...</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </Right>
    </Header>
  )
}

HeaderDefault.propTypes = {
  texto: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default HeaderDefault
