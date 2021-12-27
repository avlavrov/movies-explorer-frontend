function Footer() {
  return (
    <footer className="Footer">
      <h1 className="Footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h1>
      <div className="Footer__footer">
        <div className="Footer__copyright">
          &copy; {new Date().getFullYear()}
        </div>
        <div className="Footer__links">
          <a className="Footer__link" href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
          <a className="Footer__link" href='https://github.com/avlavrov'>Github</a>
          <a className="Footer__link" href='https://www.facebook.com/alex.lavrov.507'>Facebook</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
