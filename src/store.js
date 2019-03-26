import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
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
    case 'REQUISITO_CUMPLIDO':
      return { ...state, t: action.requisitos }
   case 'REQUISITO_INCUMPLIDO':
      return { ...state, t: action.requisitos }

    default:
      return state
  }
}

// Configuración del Store
const middlewares = []

// Sólo persistir la key 'telefono'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['telefono']
}

const persistedReducer = persistReducer(persistConfig, reducer)

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middlewares)
  )
)

const persistor = persistStore(store)

export { store, persistor }
