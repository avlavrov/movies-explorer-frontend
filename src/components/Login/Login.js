import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className="Login">
      <header className="Login__header">
        <img alt="Логотип сайта" className="Login__logo" src={logo} />
        <h1 className="Login__title">Рады видеть!</h1>
      </header>

      <form className="Login__form">
        <fieldset className="Login__form-fieldset" name="user">
          <label className="Login__form-label">
            E-mail
            <input type="email"
              className="Login__form-email"
              name="email"
              placeholder="pochta@yandex.ru"
              minLength="6"
              required
            />
          </label>
          <label className="Login__form-label">
            Пароль
            <input type="password"
              className="Login__form-password"
              name="password"
              placeholder="Пароль"
              minLength="6"
              required
            />
          </label>
          <span className="Login__input-error">
          Что-то пошло не так...
          </span>
          <button className="Login__button-login">Зарегистрироваться
          </button>
          <span className="Login__login">
          Ещё не зарегистрированы?
          <Link className="Login__link" to='/signup'>Регистрация</Link>

          </span>
        </fieldset>
      </form>
    </main>
  )
}

export default Login;
