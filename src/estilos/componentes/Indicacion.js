import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  fondo: {
    backgroundColor: colores.secundario
  },
  texto: {
    color: colores.texto,
    fontFamily: 'Roboto_medium',
    fontSize: tamaño.texto
  }
})
