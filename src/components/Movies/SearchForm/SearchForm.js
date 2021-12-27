function SearchForm() {
  return (
    <main className="SearchForm">
      <fieldset className="SearchForm__fieldset">
        <div className="SearchForm__fieldset-search">
          <input type="text"
            className="SearchForm__input"
            name="FilmSearch"
            placeholder="Фильм"
            type="text"
            minLength="2"
            required
          />
          <button className="SearchForm__button">
          </button>
        </div>
        <label className="SearchForm__label">
          <input
            type="checkbox"
            class="SearchForm__checkbox"
          />
          Короткометражки
        </label>

      </fieldset>
      <div className="SearchForm__line"></div>
    </main>
  )
}

export default SearchForm;
