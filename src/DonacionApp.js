// Layout principal y estructura de las escenas requeridas por native-base.
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Root } from 'native-base'
import { MenuProvider } from 'react-native-popup-menu'
import { Font } from 'expo'

import Navegador from './Navegador'

// Root es necesario para que funcione Action Sheet.
// Navegador es nuestro navegador principal.
class DonacionApp extends Component {
  // Cargar las fuentes que usamos en la app.
  async componentDidMount() {
    // Deshabilitamos eslint porque esta es la forma recomendada de cargar
    // archivos tanto por eslint como por native-base.
    await Font.loadAsync({
      // eslint-disable-next-line global-require
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      // eslint-disable-next-line global-require
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
  }

  render() {
    return (
      <Root>
        <MenuProvider>
          <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)" />
          <Navegador />
        </MenuProvider>
      </Root>
    )
  }
}

export default DonacionApp
