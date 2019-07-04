// Layout principal y estructura de las escenas requeridas por native-base.
import React from 'react'
import { StatusBar } from 'react-native'
import { MenuProvider } from 'react-native-popup-menu'

import { colores } from './estilos/Base'
import Navegador from './Navegador'

// Navegador es nuestro navegador principal.
const DonacionApp = () => (
  <MenuProvider>
    <StatusBar translucent backgroundColor={ colores.translucido } />
    <Navegador />
  </MenuProvider>
)

export default DonacionApp
