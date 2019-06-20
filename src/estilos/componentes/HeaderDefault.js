import { StatusBar, StyleSheet } from 'react-native'

import { colores, tamaño, estilos } from '../Base'

export default StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 4
  },
  contenedorIconoHeader: {
    backgroundColor: colores.primario
  },
  header: {
    backgroundColor: colores.primario,
    height: StatusBar.currentHeight + 56,
    paddingTop: StatusBar.currentHeight
  },
  iconoHeader: {
    color: colores.texto,
    elevation: 0,
    fontSize: 25
  },
  iconoMenu: {
    color: colores.primario
  },
  left: {
    flex: 1
  },
  menu: {
    backgroundColor: colores.terciario
  },
  opcionMenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  right: {
    flex: 1
  },
  textoHeader: {
    ...estilos.fuente,
    fontSize: tamaño.titulo,
    fontWeight: 'bold'
  },
  textoMenu: {
    color: colores.primario
  }
})
