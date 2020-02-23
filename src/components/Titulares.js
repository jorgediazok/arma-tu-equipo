import React from 'react';
import { connect } from 'react-redux';

const Titulares = ({ titulares, quitarTitular }) => (
  <section>
    <h2>Jugadores Titulares</h2>
    <div className="cancha">
      {titulares.map(jugador => (
        <article className="titular" key={jugador.id}>
          <div>
            <img src={jugador.foto} alt={jugador.nombre} />
            <button onClick={() => quitarTitular(jugador)}>X</button>
            <p>{jugador.nombre}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
const mapStateToProps = state => ({
  titulares: state.titulares
});

const mapDispatchToProps = dispatch => ({
  quitarTitular(jugador) {
    dispatch({
      type: 'QUITAR_TITULAR',
      jugador
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
