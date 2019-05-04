// Layout principal y estructura de las escenas requeridas por native-base.
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { MenuProvider } from 'react-native-popup-menu'
import { Font } from 'expo'

import { colores } from './estilos/Base'
import Navegador from './Navegador'

// Navegador es nuestro navegador principal.
class DonacionApp extends Component {
  // No cargar la app hasta que las fuentes hayan cargado completamente.
  state = {
    loaded: false
  }

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

    this.setState({ loaded: true })
  }

  render() {
    const { loaded } = this.state

    let app = null

    // Si las fuentes están cargadas, cargar la app normalmente.
    if (loaded) {
      app = (
        <MenuProvider>
          <StatusBar translucent backgroundColor={ colores.transparencia } />
          <Navegador />
        </MenuProvider>
      )
    }

    return app
  }
}

export default DonacionApp
