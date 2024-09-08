import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home/>
      <Projects/>
      <Posts/>
      <Socials/>
      <span>made with 🌻 ☕ 🎧 💖 by myself ©{new Date().getFullYear()}</span>
    </>
  )
}

export default App
