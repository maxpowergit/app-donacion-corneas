import React, { Component } from 'react'
import { StyleSheet, Text, View, UIManager } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import EscenaIngreso from './escenas/EscenaIngreso.js'

// Necesario para que funcione en la App LayoutAnimation.
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

// Componente temporal, hasta que etén todos hechos.
class Prueba extends Component {
  render() {
    return (
      <View>
        <Text>Componente de Prueba.</Text>
      </View>
    )
  }
}

const Navegador = createStackNavigator({
  Ingreso: { screen: EscenaIngreso },
  Requisitos: { screen: Prueba },
  Contraindicaciones: { screen: Prueba },
  Contacto: { screen: Prueba }
  }, {
    //TODO initialRouteName debería cambiar según haya ingresado un número telefónico.
    initialRouteName: "Ingreso",
    defaultNavigationOptions: {
      header: null
    }
  })

export default createAppContainer(Navegador)
