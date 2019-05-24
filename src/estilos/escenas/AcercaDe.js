import { StyleSheet, StatusBar } from 'react-native'

import { colores, tamaño } from '../Base'

export default StyleSheet.create({
  centrado: {
    alignItems: 'center',
    backgroundColor: colores.terciario,
    flex: 1,
    justifyContent: 'space-evenly',
    margin: 8,
    marginTop: StatusBar.currentHeight + 8
  },
  icono: {
    color: colores.secundario,
    fontSize: 120,
    padding: '10%'
  },
  texto: {
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontSize: tamaño.texto,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  textoVersion: {
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontSize: tamaño.texto,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    textAlign: 'center',
    textTransform: 'uppercase'
  }

})
