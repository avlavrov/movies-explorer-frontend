function Portfolio() {
  return (
    <section className="AboutMe__portfolio">
        <div className="AboutMe__portfolio-header">Портфолио</div>
        <div className="AboutMe__portfolio-element">
          <a className="AboutMe__portfolio-link" href='https://github.com/avlavrov/how-to-learn'>Статичный сайт</a>
          <a className="AboutMe__img-link" href='https://github.com/avlavrov/how-to-learn'>↗</a>
        </div>
        <div className="AboutMe__portfolio-element">
          <a className="AboutMe__portfolio-link" href='https://avlavrov.github.io/russian-travel/'>Адаптивный сайт</a>
          <a className="AboutMe__img-link" href='https://avlavrov.github.io/russian-travel/'>↗</a>
        </div>
        <div className="AboutMe__portfolio-element">
          <a className="AboutMe__portfolio-link" href='https://avlavrov.github.io/mesto/'>Одностраничное приложение</a>
          <a className="AboutMe__img-link" href='https://avlavrov.github.io/mesto/'>↗</a>
        </div>
      </section>
  )
}

export default Portfolio;
