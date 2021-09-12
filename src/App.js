import './styles.css';
import NominatedList from './components/NominatedList';
import { MovieProvider } from './store/movieStore';
import MovieSection from './components/MovieSection';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <div className="App">
      <MovieProvider>
        <TopBar />
        <div className="row">
          <div className="col-9 movies">
            <MovieSection />
          </div>
          <div className="col nominations">
            <NominatedList />
          </div>
        </div>
      </MovieProvider>
    </div>
  );
}
