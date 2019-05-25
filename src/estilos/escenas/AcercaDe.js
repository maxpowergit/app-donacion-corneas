import { StyleSheet, StatusBar } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  centrado: {
    alignItems: 'center'
  },
  escena: {
    backgroundColor: colores.terciario,
    flex: 1,
    margin: 8,
    marginTop: StatusBar.currentHeight + 8
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
