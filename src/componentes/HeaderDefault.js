import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, StyleSheet } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Text } from 'native-base'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
const HeaderDefault = ({ texto }) => (
  <Header style={ estilos.header }>
    <Left style={ { flex: 1 } } />
    <Body style={ { flex: 3, alignItems: 'center' } }>
      <Text style={ estilos.textoHeader }>
        { texto.toUpperCase() }
      </Text>
    </Body>
    <Right style={ { flex: 1 } }>
      <Button transparent>
        <Icon name="more" style={ estilos.iconoHeader } />
      </Button>
    </Right>
  </Header>
)

HeaderDefault.propTypes = {
  texto: PropTypes.string.isRequired
}

const estilos = StyleSheet.create({
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

export default HeaderDefault
