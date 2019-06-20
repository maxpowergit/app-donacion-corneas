import { StyleSheet, StatusBar, Dimensions } from 'react-native'

export const colores = {
  primario: '#08263C',
  secundario: '#0C3763',
  terciario: '#D3D1D1',
  texto: '#FFFFFF',
  transparencia: 'rgba(0, 0, 0, 0.20)'
}

export const tamaño = {
  titulo: 20,
  item: 16
}

export const pantalla = {
  ancho: Dimensions.get('window').width,
  altura: Dimensions.get('window').height
}

export const logoGrande = pantalla.altura / 3
export const logoChico = pantalla.altura / 5

export const estilos = StyleSheet.create({
  escenaPopup: {
    alignItems: 'center',
    backgroundColor: colores.terciario,
    flex: 1,
    justifyContent: 'center',
    margin: 8,
    padding: 8,
    marginTop: StatusBar.currentHeight + 8
  },
  fuente: {
    color: colores.texto,
    fontFamily: 'Roboto_medium',
    fontSize: tamaño.texto,
    textTransform: 'uppercase'
  }
})
