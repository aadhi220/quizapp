import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Header from "./components/Header";

import { useGlobalContext } from "./context";

function App() {
  const { darkMode } = useGlobalContext();
  return (
    <div data-theme={`${darkMode ? "dark" : "cyberpunk"}`}>
      <div className="App bg-base-200 transition-all">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
