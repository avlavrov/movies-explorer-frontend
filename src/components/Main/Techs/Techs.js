import { Link } from 'react-router-dom';

function Techs() {
    return (
      <section className="Techs">
      <header className="Techs__header">
        <h1 className="Techs__title">Технологии</h1>
      </header>
      <div className="Techs__text-container">
        <h1 className="Techs__subtitle">
        7 технологий
        </h1>
        <p className="Techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <section className="Techs__techs-container">
        <div className="Techs__tech">HTML</div>
        <div className="Techs__tech">CSS</div>
        <div className="Techs__tech">JS</div>
        <div className="Techs__tech">React</div>
        <div className="Techs__tech">Git</div>
        <div className="Techs__tech">Express.js</div>
        <div className="Techs__tech">mongoDB</div>
      </section>
    </section>
  )
}

export default Techs;
