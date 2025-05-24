import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import GroceryList from "./components/GroceryList";
import LoginToggle from "./components/LoginToggle";
import AgeIncreaserCard from "./components/AgeIncreaserCard";
import LiveCharCounter from "./components/LiveCharCounter";
import FavoriteFruitSelector from "./components/FavoriteFruitSelector";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<WeeklyTest />} />
            <Route path="/GroceryList" element={<GroceryList />} />
            <Route path="/LoginToggle" element={<LoginToggle />} />
            <Route path="/AgeIncreaserCard" element={<AgeIncreaserCard name="Sugan" />} />
            <Route path="/LiveCharCounter" element={<LiveCharCounter />} />
            <Route path="/FavoriteFruitSelector" element={<FavoriteFruitSelector />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function WeeklyTest () {
  return (
    <>
      <h1 className="hero-text">React_Weekly_Test_1
      </h1>
    </>
  );
}

export default App;
