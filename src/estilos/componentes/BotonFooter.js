import { StyleSheet } from 'react-native'

import { tamaño } from '../Base'

export default StyleSheet.create({
  contenedor: {
    flex: 1
  },
  texto: {
    fontSize: tamaño.item,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
})
