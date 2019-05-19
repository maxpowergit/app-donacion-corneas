import { StyleSheet } from 'react-native'
import { colores } from '../Base'

export default StyleSheet.create({
  label: {
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  // Ajustar inputs a la altura del texto.
  input: {
    color: colores.primario,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    height: 0
  },
  item: {
    borderBottomWidth: 1.5,
    borderColor: colores.primario,
    marginLeft: 8,
    marginRight: 8
  }
})
