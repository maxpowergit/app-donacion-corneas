import React, { Component } from 'react'
import { UIManager } from 'react-native'
import { Provider } from 'react-redux'

import DonacionApp from './src/DonacionApp.js'
import { store } from './src/store.js'

// Necesario para que funcione en la App LayoutAnimation.
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

export default class App extends Component {
  render() {
    return (
      <Provider store= { store }>
        <DonacionApp />
      </Provider>
    )
  }
}

