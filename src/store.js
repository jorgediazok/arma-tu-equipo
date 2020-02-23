import { createStore } from 'redux';

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: 'Santos Borré',
      foto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEWv1lg0vn57gtLTWWe4SXsrH84iprH--r-ygA4RTLJAVfqO9l'
    },
    {
      id: 2,
      nombre: 'De La Cruz',
      foto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpyzGOVcnhiMPzuIzNj5B54zquJDJoX0n8Ag5jLz8OpUbctMDG'
    },
    {
      id: 3,
      nombre: 'Enzo Perez',
      foto:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyWB9cFKJBBWajj87F0TpLx_K9QEDjGYYV8tCI-bxGRGb_ckf9'
    }
  ],
  titulares: [],
  suplentes: []
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === 'AGREGAR_TITULAR') {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(
        jugador => jugador.id !== action.jugador.id
      )
    };
  }
  if (action.type === 'AGREGAR_SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(
        jugador => jugador.id !== action.jugador.id
      )
    };
  }
  if (action.type === 'QUITAR_TITULAR') {
    return {
      ...state,
      titulares: state.titulares.filter(
        jugador => jugador.id !== action.jugador.id
      ),
      jugadores: state.jugadores.concat(action.jugador)
    };
  }
  if (action.type === 'QUITAR_SUPLENTE') {
    return {
      ...state,
      suplentes: state.suplentes.filter(
        jugador => jugador.id !== action.jugador.id
      ),
      jugadores: state.jugadores.concat(action.jugador)
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
