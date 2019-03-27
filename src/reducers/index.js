// Reducer raíz de la aplicación
import { combineReducers } from 'redux'

import telefono from './telefono'
import tiempoTranscurrido from './tiempoTranscurrido'
import requisitos from './requisitos'

const reducer = combineReducers({
  telefono,
  tiempoTranscurrido,
  requisitos
})

export default reducer
