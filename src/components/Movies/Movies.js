import Header from '../Header/Header.js';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function Movies() {
  return (
      <main className="Movies">
        <Header/>
        <SearchForm/>
        <MoviesCardList/>
        <Footer/>
      </main>
  )
}

export default Movies;
