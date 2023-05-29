import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import { Home } from "./Home";
import { Procedures } from "./Procedures";
import { Contact } from "./Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/procedures">Procedures</Link>
            <Link to="/contact">Contact</Link>
            <div class="animation start-home"></div>
          </nav>
          <h1>Dentists online</h1>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
