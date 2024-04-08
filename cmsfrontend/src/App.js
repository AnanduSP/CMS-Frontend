import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import { Route,Routes } from 'react-router';

function App() {
  return (
    <div className="App">


      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/AllCompany" element={<AllCompany />} />
        <Route path="/search-company" element={<SearchCompany />} /> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      
      <h1>Hello</h1>
    </div>
  );
}

export default App;
