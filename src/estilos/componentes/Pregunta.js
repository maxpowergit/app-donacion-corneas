import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  contenedorCheckBox: {
    flex: 1
  },
  contenedorTexto: {
    flex: 3
  },
  textoBoton: {
    color: colores.texto,
    fontSize: tamaño.item
  },
  textoPregunta: {
    color: colores.texto,
    fontSize: tamaño.item,
    fontFamily: 'Roboto_medium',
    alignSelf: 'flex-start'
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
