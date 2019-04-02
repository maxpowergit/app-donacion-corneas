import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import HeaderDefault from './componentes/HeaderDefault.js'
import EscenaIngreso from './escenas/EscenaIngreso.js'
import EscenaRequisitos from './escenas/EscenaRequisitos.js'
import EscenaContraindicaciones from './escenas/EscenaContraindicaciones.js'

const Navegador = createStackNavigator({
  Ingreso: { screen: EscenaIngreso, navigationOptions: { header: null } },
  Requisitos: { screen: EscenaRequisitos },
  Contraindicaciones: { screen: EscenaContraindicaciones },
  Contacto: { screen: EscenaRequisitos }
  }, {
    initialRouteName: 'Ingreso'
  }
)

export default createAppContainer(Navegador)
