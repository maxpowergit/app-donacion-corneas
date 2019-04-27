import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  contenedorCheckBox: {
    flex: 1
  },
  contenedorTexto: {
    flex: 2
  },
  textoBoton: {
    color: colores.texto,
    fontSize: tamaño.item
  },
  textoPregunta: {
    color: colores.texto,
    fontSize: tamaño.item
  },
  fondo: {
    backgroundColor: colores.secundario
  },
  iconoMarcado: {
    color: colores.texto,
    fontSize: 40
  },
  iconoDesmarcado: {
    color: colores.secundario,
    fontSize: 40
  }
})
