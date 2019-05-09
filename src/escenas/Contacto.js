// En esta escena notificamos del Potencial Donante de Córneas al Coordinador
// Hospitalario de Trasplante mediante la composición de un SMS que le usuarie
// tiene que terminar de enviar usando la aplicación default de SMSs del
// teléfono.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'native-base'
import { connect } from 'react-redux'
import { SMS } from 'expo'
import moment from 'moment'
import 'moment/locale/es'

import Escena from '../componentes/Escena'
import DatoDonante from '../componentes/DatoDonante'
import DatoTemporalDonante from '../componentes/DatoTemporalDonante'
import BotonFooter from '../componentes/BotonFooter'

class Contacto extends Component {
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
      servicio: '',
      fechaHoraPCRVisible: false,
      fechaIngresoVisible: false,
      fechaNacimientoVisible: false
    }
  }

  async enviarSMS(telefono, mensaje) {
    const { navigation } = this.props
    const { result } = await SMS.sendSMSAsync(telefono, mensaje)

    // Cuando terminamos de esperar, en Android result es 'unknown' debido a
    // políticas de Google Play. En iOS puede ser 'sent' o 'cancelled'.
    if (result && result !== 'cancelled') {
      // Podemos asumir que al volver del async/await el mensaje fue enviado.
      navigation.navigate('indicaciones')
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
      nombre, apellido, dni, fechaNacimiento, fechaIngreso, fechaHoraPCR, causaMuerte, servicio,
      fechaHoraPCRVisible, fechaIngresoVisible, fechaNacimientoVisible
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

          <DatoTemporalDonante
            label="fecha de nacimiento"
            value={ fechaNacimiento }
            visible={ fechaNacimientoVisible }
            onPress={ () => this.setState({ fechaNacimientoVisible: true }) }
            onChange={ date => this.setState({ fechaNacimiento: moment(date).format('LL'), fechaNacimientoVisible: false }) }
            onCancel={ () => this.setState({ fechaNacimientoVisible: false }) }
          />

          <DatoTemporalDonante
            label="fecha de ingreso"
            value={ fechaIngreso }
            visible={ fechaIngresoVisible }
            onPress={ () => this.setState({ fechaIngresoVisible: true }) }
            onChange={ date => this.setState({ fechaIngreso: moment(date).format('LL'), fechaIngresoVisible: false }) }
            onCancel={ () => this.setState({ fechaIngresoVisible: false }) }
          />

          <DatoTemporalDonante
            label="fecha y hora del pcr"
            value={ fechaHoraPCR }
            visible={ fechaHoraPCRVisible }
            mode="datetime"
            onPress={ () => this.setState({ fechaHoraPCRVisible: true }) }
            onChange={ date => this.setState({ fechaHoraPCR: moment(date).format('LLL'), fechaHoraPCRVisible: false }) }
            onCancel={ () => this.setState({ fechaHoraPCRVisible: false }) }
          />

          <DatoDonante
            label="causa de muerte"
            value={ causaMuerte }
            onChange={ text => this.setState({ causaMuerte: text }) }
          />

          <DatoDonante
            label="servicio"
            value={ servicio }
            returnKeyType="done"
            onChange={ text => this.setState({ servicio: text }) }
          />
        </Form>
      </Escena>
    )
  }
}

Contacto.propTypes = {
  telefono: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ telefono }) => ({
  telefono
})

export default connect(mapStateToProps)(Contacto)
