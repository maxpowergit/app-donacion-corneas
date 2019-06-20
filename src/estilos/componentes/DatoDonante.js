import { StyleSheet } from 'react-native'

import { colores, estilos } from '../Base'

export default StyleSheet.create({
  // Ajustar inputs a la altura del texto.
  input: {
    ...estilos.fuente,
    height: 0,
    textTransform: 'none'
  },
  item: {
    borderBottomWidth: 1.5,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 64
  },
  label: estilos.fuente
})
