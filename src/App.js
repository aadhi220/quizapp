
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-green-400 ">
      <Header/>
   <Routes>
    <Route path={'/'} element={<Home/>}/>
   </Routes>
    </div>
  );
}

export default App;
