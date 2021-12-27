import avatar from '../../../images/avatar.png';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <div className="AboutMe">
      <header className="AboutMe__header">
        <h1 className="AboutMe__title">Студент</h1>
      </header>
      <section className="AboutMe__bio">
        <div className="AboutMe__bio-text">
          <h1 className="AboutMe__name">
            Виталий
          </h1>
          <p className="AboutMe__job">Фронтенд-разработчик, 30 лет</p>
          <p className="AboutMe__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="AboutMe__links">
            <a className="AboutMe__link" href='https://www.facebook.com/alex.lavrov.507' target='blank'>Facebook</a>
            <a className="AboutMe__link" href='https://github.com/avlavrov' target='blank'>Github</a>
          </div>
        </div>
        <img alt="Alexander Lavrov" className="AboutMe__avatar" src={avatar} />
      </section>
      <Portfolio/>
    </div>
  )
}

export default AboutMe;
