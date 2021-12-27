function Portfolio() {
  return (
    <section className="AboutMe__portfolio">
        <div className="AboutMe__portfolio-header">Портфолио</div>
        <div className="AboutMe__portfolio-element">
          <a className="AboutMe__portfolio-link" href='https://github.com/avlavrov/how-to-learn' target='blank'>Статичный сайт</a>
          <a className="AboutMe__img-link" href='https://github.com/avlavrov/how-to-learn' target='blank'>↗</a>
        </div>
        <div className="AboutMe__portfolio-element">
          <a className="AboutMe__portfolio-link" href='https://avlavrov.github.io/russian-travel/' target='blank'>Адаптивный сайт</a>
          <a className="AboutMe__img-link" href='https://avlavrov.github.io/russian-travel/' target='blank'>↗</a>
        </div>
        <div className="AboutMe__portfolio-element">
          <a className="AboutMe__portfolio-link" href='https://avlavrov.github.io/mesto/' target='blank'>Одностраничное приложение</a>
          <a className="AboutMe__img-link" href='https://avlavrov.github.io/mesto/' target='blank'>↗</a>
        </div>
      </section>
  )
}

export default Portfolio;
