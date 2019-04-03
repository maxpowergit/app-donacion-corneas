import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import reducer from './reducers'

const middlewares = []

// Agregar middlewares en desarrollo
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

// Sólo persistir la key 'telefono'
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['telefono']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middlewares)
  )
)

const persistor = persistStore(store)

export { store, persistor }
