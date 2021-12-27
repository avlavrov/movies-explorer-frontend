import { Link } from 'react-router-dom';

function AboutProject() {
  return (
    <div className="AboutProject">
      <header className="AboutProject__header">
        <h1 id="about" className="AboutProject__title">О проекте</h1>
      </header>
      <section className="AboutProject__short">
        <div className="AboutProject__container">
          <h2 className="AboutProject__subtitle">Дипломный проект включал 5 этапов</h2>
          <p className="AboutProject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="AboutProject__container">
          <h2 className="AboutProject__subtitle">На выполнение диплома ушло 5 недель</h2>
          <p className="AboutProject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </section>
      <section className="AboutProject__graph-week">
          <div className="AboutProject__graph-weekone">1 неделя</div>
          <div className="AboutProject__graph-weekfour">4 недели</div>
          <div className="AboutProject__graph-text">Back-end</div>
          <div className="AboutProject__graph-text">Front-end</div>
      </section>
    </div>
  )
}

export default AboutProject;
