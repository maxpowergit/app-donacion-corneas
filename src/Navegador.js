// Navegación principal, definición de escenas y rutas.
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Ingreso from './escenas/Ingreso'
import Requisitos from './escenas/Requisitos'
import Contraindicaciones from './escenas/Contraindicaciones'
import Contacto from './escenas/Contacto'
import Indicaciones from './escenas/Indicaciones'
import Telefono from './escenas/Telefono.js'

const Navegador = createStackNavigator({
  ingreso: { screen: Ingreso },
  requisitos: { screen: Requisitos },
  contraindicaciones: { screen: Contraindicaciones },
  contacto: { screen: Contacto },
  indicaciones: { screen: Indicaciones },
  telefono: { screen: Telefono }
}, {
  initialRouteName: 'ingreso',
  defaultNavigationOptions: {
    header: null
  }
})

export default createAppContainer(Navegador)
