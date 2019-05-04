// Reducer raíz de la aplicación
import { combineReducers } from 'redux'

import telefono from './telefono'
import tiempoTranscurrido from './tiempoTranscurrido'
import requisitos from './requisitos'
import contraindicaciones from './contraindicaciones'
import modalVisible from './modalVisible'
import acercaDeVisible from './acercaDeVisible'

const reducer = combineReducers({
  telefono,
  tiempoTranscurrido,
  requisitos,
  contraindicaciones,
  acercaDeVisible,
  modalVisible
})

export default reducer
