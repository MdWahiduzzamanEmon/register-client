import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import SeeAllUser from "./Components/SeeAllUser/SeeAllUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/seeAllUser" element={<SeeAllUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
