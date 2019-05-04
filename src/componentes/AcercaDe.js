import React from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text } from 'react-native'

import estilos from '../estilos/componentes/AcercaDe'

const AcercaDe = ({ visible, onRequestClose }) => (
  <Modal
    animationType="slide"
    visible={ visible }
    onRequestClose={ onRequestClose }

  >
    <View style={ estilos.modal }>
      <Text style={ estilos.textoPregunta }>
        {
          'Desarrollo en colaboración con la "Unidad de '
          + 'Procuración de Órganos y Tejidos - Hospital César Milstein"'
        }
      </Text>
    </View>
  </Modal>
)

AcercaDe.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default AcercaDe
