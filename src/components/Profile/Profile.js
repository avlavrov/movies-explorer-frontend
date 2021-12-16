import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function Profile() {
  return (
    <main className="Profile">
      <Header />
      <h1 className="Profile__title">Привет, Виталий!</h1>
      <form className="Profile__form">
        <fieldset className="Profile__form-fieldset" name="user">
          <input type="text"
            className="Profile__form-name"
            name="username"
            placeholder="Виталий"
            minLength="2"
            required
          />
          <input type="email"
            className="Profile__form-email"
            name="email"
            placeholder="pochta@yandex.ru"
            minLength="6"
            required
          />
          <button className="Profile__button-edit">
          </button>
          <button className="Profile__button-exit">
          </button>
        </fieldset>
      </form>
      <Footer />
    </main>
  )
}

export default Profile;
