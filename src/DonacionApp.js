// Layout principal y estructura de las escenas requeridas por native-base.
import React from 'react'
import { StatusBar } from 'react-native'
import { Root } from 'native-base'

import Navegador from './Navegador'

// Root es necesario para que funcione Action Sheet.
// Navegador es nuestro navegador principal.
const DonacionApp = () => (
  <Root>
    <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)" />
    <Navegador />
  </Root>
)

export default DonacionApp
