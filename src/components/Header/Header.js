import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.js';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img alt="Логотип сайта" src={logo} />
      </Link>
      <Navigation />
      <Link to="/signin"
        className="header__login-button">
        Войти
      </Link>

    </header>
  )
}

export default Header;
