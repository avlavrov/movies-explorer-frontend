import temp_pic from '../../../images/temp_pic.png';

function MoviesCard() {
  return (
    <main className="MoviesCard">
      <section className="MoviesCard__header">
        <div className="MoviesCard__about">
          <h1 className="MoviesCard__title">33 слова о дизайне</h1>
          <span className="MoviesCard__duration">1ч 47м</span>
        </div>
        <input type="checkbox" className="MoviesCard__like-button" />
      </section>
      <img src={temp_pic} alt="Интересный фильм" className="MoviesCard__image" />
    </main>
  )
}

export default MoviesCard;
