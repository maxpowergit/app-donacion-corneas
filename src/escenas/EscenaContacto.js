// En esta escena notificamos del Potencial Donante de Córneas al Coordinador
// Hospitalario de Trasplante mediante la composición de un SMS que le usuarie
// tiene que terminar de enviar usando la aplicación default de SMSs del
// teléfono.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'native-base'
import { connect } from 'react-redux'
import { SMS } from 'expo'

import Escena from '../componentes/Escena'
import DatoDonante from '../componentes/DatoDonante'
import DatoFechaDonante from '../componentes/DatoFechaDonante'
import BotonFooter from '../componentes/BotonFooter'

class EscenaContacto extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      apellido: '',
      dni: '',
      fechaNacimiento: '',
      fechaIngreso: '',
      fechaHoraPCR: '',
      causaMuerte: '',
      servicio: ''
    }
  }

  async enviarSMS(telefono, mensaje) {
    const { navigation } = this.props
    const { result } = await SMS.sendSMSAsync(telefono, mensaje)

    // Cuando terminamos de esperar, en Android result es 'unknown' debido a
    // políticas de Google Play. En iOS puede ser 'sent' o 'cancelled'.
    if (result && result !== 'cancelled') {
      // Podemos asumir que al volver del async/await el mensaje fue enviado.
      navigation.navigate('Indicaciones')
    }
  }

  mensaje() {
    const {
      nombre, apellido, dni, fechaNacimiento, fechaIngreso, fechaHoraPCR, causaMuerte, servicio
    } = this.state

    const campos = [
      `Nombre: ${nombre}`,
      `Apellido: ${apellido}`,
      `Documento: ${dni}`,
      `Fecha de Nacimiento: ${fechaNacimiento}`,
      `Fecha de Ingreso: ${fechaIngreso}`,
      `Fecha y hora del PCR: ${fechaHoraPCR}`,
      `Causa de Muerte: ${causaMuerte}`,
      `Servicio: ${servicio}`
    ]

    return campos.join('\n')
  }

  render() {
    const { telefono, navigation } = this.props
    const {
      nombre, apellido, dni, fechaNacimiento, fechaIngreso, fechaHoraPCR, causaMuerte, servicio
    } = this.state

    const botonFooter = (
      <BotonFooter
        onPress={ () => this.enviarSMS(telefono, this.mensaje()) }
        texto="Preparar notificación"
      />
    )

    return (
      <Escena navigation={ navigation } footer={ botonFooter }>
        <Form>
          <DatoDonante
            label="nombre"
            value={ nombre }
            onChange={ text => this.setState({ nombre: text }) }
          />
          <DatoDonante
            label="apellido"
            value={ apellido }
            onChange={ text => this.setState({ apellido: text }) }
          />
          <DatoDonante
            label="tipo y nro de documento"
            value={ dni }
            onChange={ text => this.setState({ dni: text }) }
          />
          <DatoFechaDonante
            label="fecha de nacimiento"
            value={ fechaNacimiento }
            onChange={ date => this.setState({ fechaNacimiento: date.toLocaleDateString() }) }
          />
          <DatoFechaDonante
            label="fecha de ingreso"
            value={ fechaIngreso }
            onChange={ date => this.setState({ fechaIngreso: date.toLocaleDateString() }) }
          />
          <DatoDonante
            label="fecha y hora del pcr"
            value={ fechaHoraPCR }
            onChange={ text => this.setState({ fechaHoraPCR: text }) }
          />
          <DatoDonante
            label="causa de muerte"
            value={ causaMuerte }
            onChange={ text => this.setState({ causaMuerte: text }) }
          />
          <DatoDonante
            label="servicio"
            value={ servicio }
            onChange={ text => this.setState({ servicio: text }) }
          />
        </Form>
      </Escena>
    )
  }
}

EscenaContacto.propTypes = {
  telefono: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ telefono }) => ({
  telefono
})

export default connect(mapStateToProps)(EscenaContacto)
