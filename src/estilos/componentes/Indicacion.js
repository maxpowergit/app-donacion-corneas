import { StyleSheet } from 'react-native'

import { colores, tamaño, estilos } from '../Base'

export default StyleSheet.create({
  fondo: {
    backgroundColor: colores.secundario
  },
  texto: {
    ...estilos.fuente,
    fontWeight: 'normal'
  }
})
