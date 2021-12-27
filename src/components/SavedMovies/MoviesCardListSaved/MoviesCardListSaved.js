import MoviesCardSaved from '../MoviesCardSaved/MoviesCardSaved';

function MoviesCardListSaved() {
  return (
    <div className="MoviesCardList">
<section className="MoviesCardList__cards">
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
        <MoviesCardSaved />
      </section>
      <section className="MoviesCardList__more">
        <button className="MoviesCardList__button">Ещё</button>
      </section>
    </div>

  )
}

export default MoviesCardListSaved;
