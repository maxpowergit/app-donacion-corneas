import { StyleSheet } from 'react-native'

import { colores } from '../Base'

export default StyleSheet.create({
  contenedor: {
    alignItems: 'center'
  },
  input: {
    alignSelf: 'center',
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'center'
  },
  item: {
    borderBottomWidth: 1.5,
    borderColor: colores.primario
  },
  label: {
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
})
