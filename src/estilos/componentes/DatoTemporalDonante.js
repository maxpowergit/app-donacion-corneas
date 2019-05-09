import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  label: {
    textTransform: 'uppercase'
  },
  // Por alguna razón estaba siendo demasiado grande, así se ajusta a la altura
  // del texto.
  input: {
    height: 0
  }
})
