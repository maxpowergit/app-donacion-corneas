// Navegación principal, definición de escenas y rutas.
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

import Ingreso from './escenas/Ingreso'
import Requisitos from './escenas/Requisitos'
import Contraindicaciones from './escenas/Contraindicaciones'
import Contraindicacion from './escenas/Contraindicacion'
import Contacto from './escenas/Contacto'
import Indicaciones from './escenas/Indicaciones'
import Telefono from './escenas/Telefono'
import AcercaDe from './escenas/AcercaDe'


const NavegadorTabs = createMaterialTopTabNavigator({
  ingreso: { screen: Ingreso },
  requisitos: { screen: Requisitos },
  contraindicaciones: { screen: Contraindicaciones },
  contacto: { screen: Contacto },
  indicaciones: { screen: Indicaciones },
}, {
  initialRouteName: 'ingreso',
  swipeEnabled: false,
  backBehavior: 'order',
  tabBarComponent: 'none',
  defaultNavigationOptions: {
    tabBarVisible: false
  }
})

// un stack que tiene los tabs como primer escena.

const NavegadorInicial = createStackNavigator({
  tabs: { screen: NavegadorTabs },
  contraindicacion: { screen: Contraindicacion },
  telefono: { screen: Telefono },
  acerca: { screen: AcercaDe }
}, {
  initialRouteName: 'tabs',
  defaultNavigationOptions: {
    header: null
  }
})

export default createAppContainer(NavegadorInicial)
