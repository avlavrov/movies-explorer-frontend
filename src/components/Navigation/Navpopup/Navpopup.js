import { Link } from 'react-router-dom';

function Navpopup(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className="Navpopup">
      <nav className="Navpopup__navigation">
          <Link className="Navpopup__link" to='/'>Главная</Link>
          <Link className="Navpopup__link" to='/movies'>Фильмы</Link>
          <Link className="Navpopup__link" to='/saved-movies'>Сохранённые фильмы</Link>
          <Link className="Navpopup__link" to='/saved-movies'>Аккаунт</Link>

    </nav>
        <button
          type="button"
          onClick={props.onClose}
          className="Navpopup__close" />
      </div>
    </div>
  )
}

export default Navpopup;
