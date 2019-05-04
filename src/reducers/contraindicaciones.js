// Genera arrays falsos para cada llave y opción del mapa de
// contraindicaciones. El estado inicial resulta:
//
//   infeccion: [ false, false ],
//   tumores: [ false ],
//   ...
//
import mapaContraindicaciones from '../lib/mapaContraindicaciones'

const estadoInicial = {}

Object.keys(mapaContraindicaciones).forEach((llave) => {
  estadoInicial[llave] = mapaContraindicaciones[llave].opciones.map(() => false)
})

const contraindicaciones = (state = estadoInicial, action) => {
  switch (action.type) {
    case 'CONTRAINDICACION_ASIGNADA':
      return {
        ...state,
        [action.llave]: state[action.llave].map(
          (previo, opcion) => (opcion === action.opcion ? action.valor : previo)
        )
      }
    default:
      return state
  }
}

export default contraindicaciones
