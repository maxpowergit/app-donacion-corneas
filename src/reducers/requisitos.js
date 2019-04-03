const estadoInicial = {}

const requisitos = (state = estadoInicial, action) => {
  switch (action.type) {
    case 'REQUISITO_CUMPLIDO':
      return { ...state, [action.llave]: action.valor }
    default:
      return state
  }
}

export default requisitos
