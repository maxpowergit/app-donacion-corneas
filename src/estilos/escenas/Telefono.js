import { StyleSheet, StatusBar } from 'react-native'

import { colores } from '../Base'

export default StyleSheet.create({
  centrado: {
    alignItems: 'center',
    backgroundColor: colores.terciario,
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    padding: 8
  },
  icono: {
    color: colores.secundario,
    padding: '10%'
  }
})
