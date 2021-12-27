import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  return (
    <div className="MoviesCardList">
<section className="MoviesCardList__cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </section>
      <section className="MoviesCardList__more">
        <button className="MoviesCardList__button">Ещё</button>
      </section>
    </div>

  )
}

export default MoviesCardList;
