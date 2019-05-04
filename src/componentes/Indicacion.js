import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardItem, Body, Text } from 'native-base'

import estilos from '../estilos/componentes/Indicacion'

const Indicacion = ({ children }) => (
  <Card transparent>
    <CardItem style={ estilos.fondo }>
      <Body>
        <Text style={ estilos.texto }>
          { children.toUpperCase() }
        </Text>
      </Body>
    </CardItem>
  </Card>
)

Indicacion.propTypes = {
  children: PropTypes.string.isRequired
}

export default Indicacion
