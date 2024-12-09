import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import FavouritesList from "./components/FavouritesList";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <MyNav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/:company" element={<CompanySearchResults />} />
            <Route path="/favourites" element={<FavouritesList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
