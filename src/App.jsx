import "./App.css";
import CompanyPortfolio from "./components/Home";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <CompanyPortfolio />
    </BrowserRouter>
  );
}

export default App;
