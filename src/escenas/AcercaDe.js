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

          <Row>
            <Text style={ [estilos.texto, estilos.flexMedio] }>
              ProcCorn es un desarrollo de MuaDev en colaboración con la Unidad
              de Procuración de Órganos y Tejidos - Hospital César Milstein
            </Text>
          </Row>

          <Row>
            <Button iconLeft transparent>
              <Icon
                name="logo-github"
                style={ estilos.iconoSecundario }
                onPress={ () => { Linking.openURL('https://github.com/muadev/proccorn') } }
              />

              <Text style={ estilos.texto }>GitHub</Text>
            </Button>

            <Button iconLeft transparent>
              <Icon
                name="mail"
                style={ estilos.iconoSecundario }
                onPress={ () => { Linking.openURL('mailto:muadev@riseup.net') } }
              />

              <Text style={ estilos.texto }>Contacto</Text>
            </Button>
          </Row>

          <Row>
            <Button iconLeft transparent>
              <Icon
                name="color-palette"
                style={ estilos.iconoSecundario }
                onPress={ () => { Linking.openURL('https://www.behance.net/vronoise') } }
              />

              <Text style={ estilos.texto }>Diseño por Vro Noise</Text>
            </Button>
          </Row>

          <Row>
            <Text style={ [estilos.texto, estilos.flexChico] }>
              { `Versión ${paquete.version}` }
            </Text>
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
