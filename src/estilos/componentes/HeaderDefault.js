import { StatusBar, StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  header: {
    backgroundColor: colores.primario,
    height: StatusBar.currentHeight + 56,
    paddingTop: StatusBar.currentHeight
  },
  left: {
    flex: 1
  },
  body: {
    flex: 3,
    alignItems: 'center'
  },
  right: {
    flex: 1
  },
  iconoHeader: {
    color: colores.texto,
    fontSize: 25
  },
  textoHeader: {
    color: colores.texto,
    fontSize: tamaño.titulo,
    textTransform: 'uppercase'
  },
  opcionMenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  iconoMenu: {
    color: colores.primario
  },
  textoMenu: {
    color: colores.primario
  },
  menu: {
    backgroundColor: colores.terciario
  }
})
