import React, { Component } from 'react'

import PreguntaRequisitos from '../componentes/PreguntaRequisitos.js'

export default class EscenaRequisitos extends Component {
  render() {
    return (
      <PreguntaRequisitos
        pregunta= '¿La edad es entre los 2 y los 80 años?'
      />   
    )
  }
}
