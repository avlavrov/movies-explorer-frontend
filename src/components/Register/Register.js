import logo from '../../images/logo.svg';
import Footer from '../Footer/Footer.js';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="Register">
      <header className="Register__header">
        <img alt="Логотип сайта" className="Register__logo" src={logo} />
        <h1 className="Register__title">Добро пожаловать!</h1>
      </header>

      <form className="Register__form">
        <fieldset className="Register__form-fieldset" name="user">
          <label className="Register__form-label">
            Имя
            <input type="text"
              className="Register__form-name"
              name="username"
              placeholder="Имя"
              minLength="2"
              required
            />
          </label>
          <label className="Register__form-label">
            E-mail
            <input type="email"
              className="Register__form-email"
              name="email"
              placeholder="pochta@yandex.ru"
              minLength="6"
              required
            />
          </label>
          <label className="Register__form-label">
            Пароль
            <input type="password"
              className="Register__form-password"
              name="password"
              placeholder="Пароль"
              minLength="6"
              required
            />
          </label>
          <span className="Register__input-error">
          Что-то пошло не так...
          </span>
          <button className="Register__button-register">Зарегистрироваться
          </button>
          <span className="Register__login">
          Уже зарегистрировались?
          <Link className="Register__link" to='/signin'>Войти</Link>

          </span>
        </fieldset>
      </form>
    </main>
  )
}

export default Register;
