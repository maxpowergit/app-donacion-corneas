import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

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
  Ingreso: { screen: Prueba },
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
