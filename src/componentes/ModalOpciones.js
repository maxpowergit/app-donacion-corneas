import React from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text } from 'react-native'
import { Button } from 'native-base'

import estilos from '../estilos/componentes/ModalOpciones'

const ModalOpciones = ({ visible, onRequestClose, opciones }) => (
  <Modal
    animationType="slide"
    visible={ visible }
    onRequestClose={ onRequestClose }

  >
    <View style={ estilos.modal }>
      <Text style={ estilos.textoPregunta }>¿Es alguno de Estas?</Text>
      {opciones}
      <Button
        style={ estilos.boton }
      >
        <Text style={ estilos.textoBoton }>NINGUNA</Text>
      </Button>
    </View>
  </Modal>
)

ModalOpciones.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  opciones: PropTypes.array.isRequired
}

export default ModalOpciones
