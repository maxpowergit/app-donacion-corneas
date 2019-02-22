import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import EscenaIngreso from './escenas/EscenaIngreso.js'
import EscenaRequisitos from './escenas/EscenaRequisitos.js'
import EscenaContraindicaciones from './escenas/EscenaContraindicaciones.js'


const Navegador = createStackNavigator({
  Ingreso: { screen: EscenaIngreso },
  Requisitos: { screen: EscenaRequisitos },
  Contraindicaciones: { screen: EscenaContraindicaciones },
  Contacto: { screen: EscenaRequisitos }
  }, {
    //TODO initialRouteName debería cambiar según haya ingresado un número telefónico.
    initialRouteName: "Contraindicaciones",
    defaultNavigationOptions: {
      header: null
    }
  })

export default createAppContainer(Navegador)
