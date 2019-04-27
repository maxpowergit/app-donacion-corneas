import { StyleSheet } from 'react-native'

import { colores } from '../Base'

export default StyleSheet.create({
  contenedorPreguntas: {
    backgroundColor: colores.secundario,
    justifyContent: 'space-around',
    padding: 8
  },
  boton: {
    alignSelf: 'center'
  },
  textoBoton: {
    color: colores.texto
  }
})
