import React, { Component } from 'react'
import { UIManager } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// Root es necesario para que funcione Action Sheet.
import { Root } from 'native-base'

import DonacionApp from './src/DonacionApp.js'
import { store, persistor } from './src/store.js'

// Necesario para que funcione en la App LayoutAnimation.
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

export default class App extends Component {
  render() {
    return (
      <Provider store= { store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <Root>
            <DonacionApp />
          </Root>
        </PersistGate>
      </Provider>
    )
  }
}
