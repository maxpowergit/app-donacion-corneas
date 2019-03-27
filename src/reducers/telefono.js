const estadoInicial = ''

const telefono = (state = estadoInicial, action)=> {
  switch (action.type) {
    case 'GUARDAR_TELEFONO':
      return action.telefono
   default:
      return state
  }
}

export default telefono
