import { GlobalStyle, Footer } from "./styles/GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom'
import Translator from "./components/i18n/Translator";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
function App() {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <>
      <GlobalStyle />

      {isProd ? (
        <Routes>
          <Route path="/" Component={ComingSoon} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/projects" Component={Projects} />
            <Route path="/me" Component={About} />
            <Route path="/blog" Component={Posts} />
            <Route path="/contact" Component={Contact} />
          </Routes>
          <Footer><Translator path="generics.footer" />{new Date().getFullYear()}</Footer>
        </>
      )}
    </>
  )
}

export default App
