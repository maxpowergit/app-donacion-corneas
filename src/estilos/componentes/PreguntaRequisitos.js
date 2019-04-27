import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  contenedorBotones: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  },
  textoBoton: {
    color: colores.texto,
    fontSize: tamaño.item
  },
  textoPregunta: {
    color: colores.texto,
    fontSize: tamaño.item
  }
})
