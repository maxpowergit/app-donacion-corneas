import React from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text } from 'react-native'

const ModalOpciones = ({ visible, onRequestClose, opciones }) => (
  <Modal
    animationType="slide"
    transparent={ false }
    visible={ visible }
    onRequestClose={ onRequestClose }
  >
    <View>
      <Text>¿Es alguno de Estos?</Text>
      {opciones}
      <Text>Hide Modal</Text>
    </View>
  </Modal>
)

ModalOpciones.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  opciones: PropTypes.array.isRequired
}


export default ModalOpciones
