import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import reducer from './reducers'

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
