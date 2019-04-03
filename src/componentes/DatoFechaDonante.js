import React, { Component } from 'react'
import { Text } from 'react-native'
import { Item, Label, Input, DatePicker } from 'native-base'

class DatoFechaDonante extends Component {
  render() {
    const { label, onChange, value } = this.props

    //TODO Cuando actualizemos a react-native >= 0.59, hay que sacar .toUpperCase
    return (
      <Item stackedLabel >
        <Label style={ { textTransform: 'uppercase'} }>{ label.toUpperCase() }</Label>

      <DatePicker
        defaultDate={new Date()}
        minimumDate={new Date(1910, 1, 1)}
        maximumDate={new Date()}
        locale={'es'}
        animationType={'fade'}
        androidMode={'spinner'}
        placeHolderText='DD/MM/AAAA'
        placeHolderTextStyle={{ color: '#d3d3d3' }}
        onDateChange={ onChange }
        />
      </Item>
    )
  }
}

export default DatoFechaDonante
