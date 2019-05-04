import { StyleSheet } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: colores.secundario
  },
  boton: {
    alignSelf: 'center'
  },
  textoBoton: {
    color: colores.texto
  },
  textoPregunta: {
    color: colores.texto,
    fontSize: tamaño.titulo
  }
})
