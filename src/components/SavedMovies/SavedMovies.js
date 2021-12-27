import Header from '../Header/Header.js';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import MoviesCardListSaved from '../SavedMovies/MoviesCardListSaved/MoviesCardListSaved';
import Footer from '../Footer/Footer.js';

function SavedMovies() {
  return (
      <main className="Movies">
        <Header
        signedin={true} />
        <SearchForm/>
        <MoviesCardListSaved/>
        <Footer/>
      </main>
  )
}

export default SavedMovies;
