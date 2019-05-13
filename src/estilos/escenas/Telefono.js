import { StyleSheet, StatusBar } from 'react-native'

import { colores } from '../Base'

export default StyleSheet.create({
  centrado: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colores.terciario,
    justifyContent: 'center',
    margin: 8,
    marginTop: StatusBar.currentHeight + 8
  },
  icono: {
    padding: '10%',
    fontSize: 150,
    color: colores.secundario
  }
})
