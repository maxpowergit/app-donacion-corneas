import { StatusBar, StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  header: {
    backgroundColor: colores.primario,
    height: StatusBar.currentHeight + 56,
    paddingTop: StatusBar.currentHeight
  },
  iconoHeader: {
    color: colores.texto,
    fontSize: tamaño.titulo
  },
  textoHeader: {
    color: colores.texto,
    fontSize: tamaño.titulo,
    textTransform: 'uppercase'
  }
})
