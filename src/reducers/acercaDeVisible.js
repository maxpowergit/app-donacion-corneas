const estadoInicial = false

const acercaDeVisible = (state = estadoInicial, action) => {
  switch (action.type) {
    case 'ACERCA_DE_VISIBLE':
      return action.valor
    default:
      return state
  }
}

export default acercaDeVisible
