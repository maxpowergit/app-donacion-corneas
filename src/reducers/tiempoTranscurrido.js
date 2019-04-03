const estadoInicial = false

const tiempoTranscurrido = (state = estadoInicial, action) => {
  switch (action.type) {
    case 'TIEMPO_TRANSCURRIDO':
      return action.tiempoTranscurrido
    default:
      return state
  }
}

export default tiempoTranscurrido
