import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.js';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className={`header ${props.main && 'header__grey'}`}>
      <Link className="header__logo" to="/">
        <img alt="Логотип сайта" src={logo} />
      </Link>
      {!props.signedin ?
        <Navigation
        main={true} />
        :
        <Navigation
          signedin={true}
           />
      }

    </header>
  )
}

export default Header;
