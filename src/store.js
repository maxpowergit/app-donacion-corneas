import { createStore } from 'redux'

const estadoInicial = {
    telefono: 555
}

const reducer = (state = estadoInicial)=> {
  return state
}

const store = createStore(reducer)

export { store }
