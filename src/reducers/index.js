// Reducer raíz de la aplicación
import { combineReducers } from 'redux'

import telefono from './telefono'
import tiempoTranscurrido from './tiempoTranscurrido'
import requisitos from './requisitos'
import contraindicaciones from './contraindicaciones'
import modalVisible from './modalVisible'

const reducer = combineReducers({
  telefono,
  tiempoTranscurrido,
  requisitos,
  contraindicaciones,
  modalVisible
})

export default reducer
