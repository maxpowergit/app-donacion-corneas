// Reducers
const estadoInicial = {
  tiempoTranscurrido: false,
}

const reducer = (state = estadoInicial, action)=> {
  switch (action.type) {
    case 'GUARDAR_TELEFONO':
      return { ...state, telefono: action.telefono }
    case 'TIEMPO_TRANSCURRIDO':
      return { ...state, tiempoTranscurrido: action.tiempoTranscurrido }
    case 'REQUISITO_CUMPLIDO':
      return { ...state, [action.llave]: action.valor }
    default:
      return state
  }
}

export default reducer
