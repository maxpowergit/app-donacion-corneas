import { createStore } from 'redux'

const estadoInicial = {
    telefono: 'Ingreso'
}

const reducer = (state = estadoInicial)=> {
  return state
}

const store = createStore(reducer)

export { store }
