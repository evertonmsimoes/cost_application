import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './components/pages/Home.jsx'
import Company from "./components/pages/Company.jsx"
import Contact from "./components/pages/Contact.jsx"
import NewProject from "./components/pages/NewProject.jsx"
import Container from "./components/layout/Container.jsx"
import Projects from "./components/pages/Projects.jsx"
import Project from "./components/pages/Project.jsx"

import Navbar from "./components/layout/Navbar.jsx"
import Footer from "./components/layout/Footer.jsx"

function App() {

  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>       
          <Route exatct path="/" element={<Home />}></Route>
          <Route exatct path="/contact" element={<Contact />}></Route>
          <Route exatct path="/company" element={<Company />}></Route>
          <Route exatct path="/newproject" element={<NewProject />}></Route>  
          <Route exatct path="/projects" element={<Projects />}></Route>  
          <Route exatct path="/project/:id" element={<Project />}></Route>  
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
