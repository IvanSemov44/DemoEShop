import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import getData from "./services/getData";
import { SingUp } from "./pages/SingUp";
import { Login } from "./pages/Login";
import MultiStepForm from "./pages/Forms/MultiStepForm";

function App() {
  getData
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

        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
