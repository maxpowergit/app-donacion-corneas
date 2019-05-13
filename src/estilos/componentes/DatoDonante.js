import { StyleSheet } from 'react-native'
import { colores } from '../Base'

export default StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold'
  },
  // Ajustar inputs a la altura del texto.
  input: {
    height: 0,
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold'
  },
  item: {
    borderColor: colores.primario,
    borderBottomWidth: 1.5,
    marginLeft: 8,
    marginRight: 8
  }
})
