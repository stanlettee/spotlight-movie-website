import './App.css';
import { useState } from 'react';
import { Header } from './components/reuse/Header';
import { Footer } from './components/reuse/Footer';
import { Home } from './components/home/Home';
import { Shows } from './components/shows/Shows';
import { Movies } from './components/movies/Movies';
import { Watchlist } from './components/watchlist/Watchlist';
import { SignIn } from './components/account/SignIn';
import { SignUp } from './components/account/SignUp';


const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWMzZGFhOTU4OWIzYmE4OGQ3YzVkOTBmZjkyNzZiNyIsIm5iZiI6MTc0OTM5NDI3MC41NDQ5OTk4LCJzdWIiOiI2ODQ1YTM1ZTcyMjc2ZmM3M2JiYjJkMTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kRZ8Q8kfEuiGE3a24TlF9dGUABOvz9PvcuV_ddOpcNo'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));


function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState('light')
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (newTheme === 'light') {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "rgb(6, 5, 5)";
    } else {
      document.body.style.backgroundColor = "rgb(6, 5, 5)";
      document.body.style.color = "white";
    }
  };
  return <> <header className="header">
    <Header setPage={setPage} changeTheme={changeTheme} theme={theme}/>
    </header>

    <main>
        {page === 'home' && <Home />}
        {page === 'movies' && <Movies />}
        {page === 'shows' && <Shows />}
        {page === 'watchlist' && <Watchlist />}
        {page === 'signin' && <SignIn />}
        {page === 'signup' && <SignUp />}
    </main>

    <footer className="footer">
      <Footer />
    </footer>

  </>
    ;
}

export default App;
