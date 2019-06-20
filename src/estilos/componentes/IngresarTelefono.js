import { StyleSheet } from 'react-native'

import { colores, estilos } from '../Base'

export default StyleSheet.create({
  contenedor: {
    alignItems: 'center'
  },
  input: {
    ...estilos.fuente,
    alignSelf: 'center',
    color: colores.primario,
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'center'
  },
  item: {
    borderBottomWidth: 1.5,
    borderColor: colores.primario
  },
  label: {
    ...estilos.fuente,
    color: colores.primario,
    textAlign: 'center'
  }
})
