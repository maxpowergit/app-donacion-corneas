import React, { Component } from 'react'
import { UIManager } from 'react-native'

import DonacionApp from './src/DonacionApp.js'

// Necesario para que funcione en la App LayoutAnimation.
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

export default class App extends Component {
  render() {
    return (
      <DonacionApp />    
    )
  }
}

