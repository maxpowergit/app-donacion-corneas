// Reducer raíz de la aplicación
import { combineReducers } from 'redux'

import telefono from './telefono'
import tiempoTranscurrido from './tiempoTranscurrido'
import requisitos from './requisitos'
import contraindicaciones from './contraindicaciones'

const reducer = combineReducers({
  telefono,
  tiempoTranscurrido,
  requisitos,
  contraindicaciones
})

export default reducer
