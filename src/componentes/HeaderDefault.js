import React from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Body, Right, Button, Icon, Text } from 'native-base'

import estilos from '../estilos/componentes/HeaderDefault'

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

export default HeaderDefault
