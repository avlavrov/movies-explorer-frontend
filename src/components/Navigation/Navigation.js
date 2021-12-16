import { Link } from 'react-router-dom';

function Navigation() {
    return (
    <nav className="Navigation">
          <Link className="Navigation__link" to='/signup'>Регистрация</Link>

    </nav>
  )
}

export default Navigation;
