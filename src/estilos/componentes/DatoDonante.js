import { StyleSheet } from 'react-native'
import { colores } from '../Base'

export default StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    color: colores.terciario
  },
  // Ajustar inputs a la altura del texto.
  input: {
    height: 0,
    color: colores.terciario
  }
})
