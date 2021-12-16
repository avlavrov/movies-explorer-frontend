import { Link } from 'react-router-dom';
import Promo__figure from '../../../images/text__COLOR_landing-logo.png';

function Promo() {
  return (
    <section className="Promo">
      <img alt="Логотип сайта" className='Promo__figure' src={Promo__figure} />
      <div className="Promo__container">
        <h1 className="Promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="Promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#about" type="button" className="Promo__button">узнать больше</a>

      </div>
    </section>
  )
}

export default Promo;
