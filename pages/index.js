import {Navbar} from "../components/Navbar"
import { Main } from "../components/Main";
import {About} from "../components/About"
import { Skills } from "../components/Skills";
import {Work} from "../components/Work"
import { Contact } from "../components/Contact";
import { useState } from "react";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const handleNavTrue = () => setNav(nav);
  return (
    <div> 
    <Navbar nav={nav}
    handleClick={handleNav}/>
    <Main nav={nav}
    handleClick={handleNavTrue}/>
    <About />
    <Skills />
    <Work />
    <Contact />
  </div>
  )
}
export default Home;
