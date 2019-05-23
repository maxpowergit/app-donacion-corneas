import { StyleSheet } from 'react-native'
import { colores } from '../Base'

export default StyleSheet.create({
  // Ajustar inputs a la altura del texto.
  input: {
    color: colores.texto,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    height: 0
  },
  item: {
    borderBottomWidth: 1.5,
    borderColor: colores.texto,
    marginLeft: 8,
    marginRight: 8
  },
  label: {
    color: colores.texto,
    fontFamily: 'Roboto_medium',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
