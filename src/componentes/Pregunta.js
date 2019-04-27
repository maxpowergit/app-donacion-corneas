import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardItem, Right, Left, Text } from 'native-base'

import CheckBox from './CheckBox'
import estilos from '../estilos/componentes/Pregunta'

const Pregunta = ({ texto, marcar, desmarcar, marcada }) => (
  <Card transparent>
    <CardItem style={ estilos.fondo }>
      <Left style={ estilos.contenedorCheckBox }>
        <CheckBox
          onPress={ () => (marcada ? desmarcar() : marcar()) }
          estilo={ marcada ? estilos.iconoMarcado : estilos.iconoDesmarcado }
        />
      </Left>
      <Right style={ estilos.contenedorTexto }>
        <Text style={ estilos.textoPregunta }>
          { texto }
        </Text>
      </Right>
    </CardItem>
  </Card>
)

Pregunta.propTypes = {
  texto: PropTypes.string.isRequired,
  marcar: PropTypes.func.isRequired,
  desmarcar: PropTypes.func.isRequired,
  marcada: PropTypes.bool
}

Pregunta.defaultProps = {
  cumplido: null
}

export default Pregunta
