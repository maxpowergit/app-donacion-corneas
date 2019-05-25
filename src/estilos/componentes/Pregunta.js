import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  contenedorCheckBox: {
    flex: 1
  },
  contenedorTexto: {
    flex: 4
  },
  fondo: {
    backgroundColor: colores.secundario
  },
  iconoDesmarcado: {
    color: colores.secundario,
    fontSize: 30,
    marginLeft: 8,
    marginRight: 8
  },
  iconoMarcado: {
    color: colores.texto,
    fontSize: 30,
    marginLeft: 8,
    marginRight: 8
  },
  textoBoton: {
    color: colores.texto,
    fontSize: tamaño.item
  },
  textoPregunta: {
    alignSelf: 'flex-start',
    color: colores.texto,
    fontFamily: 'Roboto_medium',
    fontSize: tamaño.item,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
