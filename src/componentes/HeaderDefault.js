import React, { Component } from 'react'
import { Text, StatusBar, StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class HeaderDefault extends Component {
  render() {
    const { texto } = this.props

    return (
      <Header style= { estilos.header } >
        <Left style={{flex:1}} />
        <Body style={{flex:1, alignItems:'center'}} >
          <Text style= { estilos.textoHeader } > { texto } </Text>
        </Body>
        <Right  style={{flex:1}} >
          <Button transparent>
            <Icon name='more' style={ estilos.iconoHeader} />
          </Button>
        </Right>
      </Header>
    )
  }
}

const estilos = StyleSheet.create({
  header: {
    backgroundColor: '#08263C',
    paddingTop: StatusBar.currentHeight,
    height: StatusBar.currentHeight + 56
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
