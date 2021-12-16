import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="NotFound">
      <h1 className="NotFound__title">
      404
      </h1>
          <span className="NotFound__NotFound">
          Страница не найдена
          </span>
          <Link className="NotFound__link" to='/signup'>Назад</Link>
    </main>
  )
}

export default NotFound;
