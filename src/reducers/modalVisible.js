const estadoInicial = false

const modalVisible = (state = estadoInicial, action) => {
  switch (action.type) {
    case 'MODAL_VISIBLE':
      return action.valor
    default:
      return state
  }
}

export default modalVisible
