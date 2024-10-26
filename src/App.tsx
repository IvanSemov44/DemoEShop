import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { SingUp } from "./pages/SingUp";
import { Login } from "./pages/Login";
import MultiStepForm from "./pages/Forms/MultiStepForm";
import { MultiStepFormSecond } from "./pages/Forms/MultiStepFormSecond";
import LogInForm from "./Forms/LogInForm/LogInForm";
import LoginPractice from "./componentsPractice/LoginPractice";
import RegisterPractice from "./componentsPractice/Register";

function App() {
  return (
    <ShoppingCartProvider>

      <Navbar />
      <Container className="md-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/multystepform" element={<MultiStepForm />} />
          <Route path="/multiStepFormSecond" element={<MultiStepFormSecond />} />
          <Route path="/logInForm" element={< LogInForm />} />
          <Route path="/loginpractice" element={< LoginPractice />} />
          <Route path="/registerpractice" element={< RegisterPractice />} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
