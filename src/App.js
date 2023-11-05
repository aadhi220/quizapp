
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div  data-theme="light">
      <div  className="App bg-primary text-black">
        <Header/>
     <Routes>
      <Route path={'/'} element={<Home/>}/>
      {/* <Route path={'/quiz'} element={<QuizPage/>}/> */}
     </Routes>
      </div>
    </div>
  );
}

export default App;
