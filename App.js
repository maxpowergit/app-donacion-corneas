// Puerta de entrada a la aplicación, integración con distintas librerías usadas globalmente.
import React from 'react'
import { Platform, UIManager } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/store'
import DonacionApp from './src/DonacionApp'

// Necesario para que funcione LayoutAnimation en la App.
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

// Provider conecta la App al store de redux.
// PersistGate guarda el store en el almacenamiento permanente del teléfono.
const App = () => (
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <DonacionApp />
    </PersistGate>
  </Provider>
)

export default App
