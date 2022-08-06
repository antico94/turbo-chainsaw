import './App.css';
import Galaxy from './components/first-page-components/galaxy/galaxy';
import Navbar from './components/first-page-components/navbar/navbar';
import Firstpage from './pages/first';
import SecondPage from './pages/second';

function App() {
  return (
      <div className="App">
        <Firstpage/>
        <SecondPage/>
      </div>
  );
}

export default App;
