import { StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    backgroundColor: '#08263C',
    height: StatusBar.currentHeight + 56,
    paddingTop: StatusBar.currentHeight
  },
  iconoHeader: {
    color: 'white',
    fontSize: 30
  },
  textoHeader: {
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase'
  }
})
