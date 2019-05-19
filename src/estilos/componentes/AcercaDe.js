import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  boton: {
    alignSelf: 'center'
  },
  modal: {
    backgroundColor: colores.secundario,
    flex: 1
  },
  textoBoton: {
    color: colores.texto
  },
  textoPregunta: {
    color: colores.texto,
    fontSize: tamaño.titulo
  }
})
