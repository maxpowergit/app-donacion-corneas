import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Item, Label, Input } from 'native-base'

import estilos from '../estilos/componentes/DatoDonante'

// TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
class DatoDonante extends Component {
  render() {
    const { label, onChange, value, inputRef, ...props } = this.props

    return (
      <Item stackedLabel>
        <Label style={ estilos.label }>{ label.toUpperCase() }</Label>

        <Input
          style={ estilos.input }
          onChangeText={ onChange }
          value={ value }
          ref={ inputRef }

          { ...props }
        />
      </Item>
    )
  }
}

DatoDonante.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  returnKeyType: PropTypes.string,
  blurOnSubmit: PropTypes.bool
}

// blurOnSubmit oculta el teclado al apretar el botón de 'return', false por
// default porque sólo lo queremos al pasar a un DatoTemporalDonante y en el
// último input.
DatoDonante.defaultProps = {
  returnKeyType: 'next',
  blurOnSubmit: false
}

export default DatoDonante
