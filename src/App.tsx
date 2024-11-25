import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
// import Socials from "./components/Socials";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/projects" Component={Projects}/>
        <Route path="/me" Component={About}/>
        <Route path="/blog" Component={Posts}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
      {/* <span>made with 🌻 ☕ 🎧 💖 by myself ©{new Date().getFullYear()}</span> */}
    </>
  )
}

export default App
