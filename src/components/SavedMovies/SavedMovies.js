import Header from '../Header/Header.js';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function SavedMovies() {
  return (
      <main className="Movies">
        <Header/>
        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
      </main>
  )
}

export default SavedMovies;
