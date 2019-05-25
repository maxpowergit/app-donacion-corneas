import React from 'react'
import PropTypes from 'prop-types'
import { Linking } from 'react-native'
import { Icon, Text, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import Escena from '../componentes/Escena'
import BotonFooter from '../componentes/BotonFooter'
import paquete from '../../package.json'

import estilos from '../estilos/escenas/AcercaDe'

const AcercaDe = ({ navigation }) => {
  const botonFooter = (
    <BotonFooter
      texto="Volver"
      onPress={ () => navigation.goBack() }
    />
  )

  return (
    <Escena
      navigation={ navigation }
      footer={ botonFooter }
      contentContainerStyle={ estilos.escena }
      ocultarHeader
    >
      <Grid>
        <Col style={ estilos.centrado }>
          <Row style={ estilos.flexChico } />
          <Icon
            name="info"
            style={ estilos.iconoCentral }
            type="MaterialIcons"
          />
          <Text style={ [estilos.texto, estilos.flexMedio] }>
            {
          'ProcCorn es un desarrollo de MuaDev en colaboración con la Unidad de Procuración de Órganos y Tejidos - Hospital César Milstein'
        }
          </Text>
          <Text style={ [estilos.texto, estilos.flexChico] }>
          Versión
            {' '}
            { paquete.version }
          </Text>
          <Row>
            <Button
              iconLeft
              transparent
              onPress={ () => { Linking.openURL('https://github.com/muadev/proccorn') } }
            >
              <Icon
                name="logo-github"
                style={ estilos.iconoSecundario }
              />
              <Text style={ estilos.texto }>GitHub</Text>
            </Button>
            <Button iconLeft transparent>
              <Icon
                name="mail"
                style={ estilos.iconoSecundario }
                onPress={ () => { Linking.openURL('mailto:muadev@riseup.net') } }
              />
              <Text style={ estilos.texto }>Contactanos</Text>
            </Button>
          </Row>
        </Col>
      </Grid>
    </Escena>
  )
}

AcercaDe.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default AcercaDe
