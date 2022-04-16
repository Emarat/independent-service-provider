import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;
