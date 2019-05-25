import React from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Body, Right, Button, Icon, Text, View } from 'native-base'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'

import estilos from '../estilos/componentes/HeaderDefault'
import { colores } from '../estilos/Base'

const HeaderDefault = ({ texto, navigation }) => {
  const { navigate } = navigation

  return (
    <Header
      androidStatusBarColor={ colores.transparencia }
      style={ estilos.header }
    >
      <Left style={ estilos.left } />

      <Body style={ estilos.body }>
        <Text style={ estilos.textoHeader }>
          { texto }
        </Text>
      </Body>

      <Right style={ estilos.right }>
        <Menu>
          <MenuTrigger>
            { /* Botón deshabilitado porque el manejo del touch lo hace MenuTrigger */ }
            <Button disabled style={ estilos.contenedorIconoHeader }>
              <Icon name="more" style={ estilos.iconoHeader } />
            </Button>
          </MenuTrigger>

          <MenuOptions style={ estilos.menu }>
            <MenuOption onSelect={ () => navigate('telefono') }>
              <View style={ estilos.opcionMenu }>
                <Icon name="local-phone" style={ estilos.iconoMenu } type="MaterialIcons" />
                <Text style={ estilos.textoMenu }>    Cambiar télefono</Text>

              </View>
            </MenuOption>

            <MenuOption onSelect={ () => navigate('acerca') }>
              <View style={ estilos.opcionMenu }>
                <Icon name="info" style={ estilos.iconoMenu } type="MaterialIcons" />
                <Text style={ estilos.textoMenu }>    Acerca de...</Text>

              </View>
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
