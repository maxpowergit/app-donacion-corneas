import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// Reducers
const estadoInicial = {
  tiempoTranscurrido: false
}

const reducer = (state = estadoInicial, action)=> {
  switch (action.type) {
    case 'GUARDAR_TELEFONO':
      return { ...state, telefono: action.telefono }
    case 'TIEMPO_TRANSCURRIDO':
      return { ...state, tiempoTranscurrido: action.tiempoTranscurrido }
    default:
      return state
  }
}

// Configuración del Store
const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares)
  )
)

export { store }
