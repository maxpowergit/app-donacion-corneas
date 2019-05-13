import { StyleSheet } from 'react-native'

import { colores } from '../Base'

export default StyleSheet.create({
  contenedor: {
    alignItems: 'center'
  },
  item: {
    borderColor: colores.primario,
    borderBottomWidth: 1.5
  },
  label: {
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    color: colores.primario,
    alignSelf: 'center',
    marginLeft: 8,
    marginRight: 8,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    textAlign: 'center'

  }
})
