import "./App.css";
import { Header } from "./components/header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { SearchPage } from "./pages/search";

function App() {
  return (
    <div className="text-green">
      <Header />
      <Routes>
        <Route path="/petfinder-v2" element={<Home />} />
        <Route path="/petfinder-v2/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
