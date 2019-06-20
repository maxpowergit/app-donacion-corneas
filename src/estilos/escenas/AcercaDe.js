import { StyleSheet, StatusBar } from 'react-native'

import { colores, tamaño, estilos } from '../Base'

export default StyleSheet.create({
  escena: estilos.escenaPopup,
  centrado: {
    alignItems: 'center'
  },
  flexChico: {
    flex: 1
  },
  flexMedio: {
    flex: 2
  },
  iconoCentral: {
    color: colores.primario,
    fontSize: 110,
    padding: '10%'
  },
  iconoSecundario: {
    color: colores.primario,
    fontSize: 40
  },
  texto: {
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontSize: tamaño.texto,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'uppercase'
  }
})
