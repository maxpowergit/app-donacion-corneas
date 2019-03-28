const estadoInicial = {}

const contraindicaciones = (state = estadoInicial, action)=> {
  switch (action.type) {
    case 'CONTRAINDICACION_ASIGNADA':
      return { ...state, [action.llave]: action.valor }
    default:
      return state
  }
}

export default contraindicaciones
