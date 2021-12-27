import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className="Navigation">
      {
        !props.signedin ?
          <div className="Navigations__links">
            <Link className={`Navigation__link ${props.main && 'Navigation__link-main'}`} to='/signup'>
              Регистрация
            </Link>
            <Link to="/signin"
              className="header__login-button">
              Войти
            </Link>
          </div>
          :
          <div className="Navigations__links">
            <Link className="Navigation__link" to='/signup'>Фильмы</Link>
            <Link className="Navigation__link" to='/signup'>Сохранённые фильмы</Link>
            <Link className="Navigation__account" to='/signup'>Аккаунт</Link>
          </div>
      }
    </nav>
  )
}

export default Navigation;
