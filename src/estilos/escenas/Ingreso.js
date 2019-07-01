import { StyleSheet, StatusBar } from 'react-native'

import { colores, pantalla } from '../Base'


export default StyleSheet.create({
  centrado: {
    alignItems: 'center',
    backgroundColor: colores.terciario,
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 8
  }
})

export const logoGrande = pantalla.altura / 3
export const logoChico = pantalla.altura / 5
