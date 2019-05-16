import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  contenedorCheckBox: {
    flex: 1
  },
  contenedorTexto: {
    flex: 4
  },
  textoBoton: {
    color: colores.texto,
    fontSize: tamaño.item
  },
  textoPregunta: {
    color: colores.texto,
    fontSize: tamaño.item,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  fondo: {
    backgroundColor: colores.secundario
  },
  iconoMarcado: {
    color: colores.texto,
    fontSize: 30,
    marginLeft: 8,
    marginRight: 8
  },
  iconoDesmarcado: {
    color: colores.secundario,
    fontSize: 30,
    marginLeft: 8,
    marginRight: 8
  }
})
