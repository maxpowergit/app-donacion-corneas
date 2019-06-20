import { StyleSheet } from 'react-native'

import { colores, tamaño, estilos } from '../Base'

export default StyleSheet.create({
  contenedorCheckBox: {
    flex: 1
  },
  contenedorTexto: {
    flex: 4
  },
  fondo: {
    backgroundColor: colores.secundario
  },
  iconoDesmarcado: {
    color: colores.secundario,
    fontSize: 30,
    marginLeft: 8,
    marginRight: 8
  },
  iconoMarcado: {
    color: colores.texto,
    fontSize: 30,
    marginLeft: 8,
    marginRight: 8
  },
  textoPregunta: {
    ...estilos.fuente,
    alignSelf: 'flex-start',
    fontSize: tamaño.item
  }
})
