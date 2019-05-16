import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  texto: {
    color: colores.texto,
    fontSize: tamaño.item,
    fontWeight: 'bold'
  },
  textoDeshabilitado: {
    color: colores.primario,
    fontSize: tamaño.item,
    fontWeight: 'bold'
  },

  boton: {
    backgroundColor: colores.primario
  },
  botonDeshabilitado: {
    backgroundColor: colores.terciario
  }
})
