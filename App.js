import React from 'react'
import { Platform, UIManager, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// Root es necesario para que funcione Action Sheet.
import { Root } from 'native-base'

import DonacionApp from './src/DonacionApp'
import { store, persistor } from './src/store'

// Necesario para que funcione en la App LayoutAnimation.
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = () => (
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <Root>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)" />
        <DonacionApp />
      </Root>
    </PersistGate>
  </Provider>
)

export default App
