// Layout principal y estructura de las escenas requeridas por native-base.
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { MenuProvider } from 'react-native-popup-menu'

import { colores } from './estilos/Base'
import Navegador from './Navegador'

// Navegador es nuestro navegador principal.
class DonacionApp extends Component {
  render() {
    return (  
      <MenuProvider>
        <StatusBar translucent backgroundColor={ colores.transparencia } />
        <Navegador />
      </MenuProvider>
    )
  }
}

export default DonacionApp
