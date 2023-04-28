import { Sidenav, Main, Doit, AboutMe, Skills, Work, Projects, Contact } from "./components"
import './App.css'

function App() {
  return (
    <>
      <div className="w-10/12 lg:w-3/4 xl:w-3/5 mx-auto md:w-10/12">
        <Sidenav />
        <Main />
        <Doit />
        <AboutMe />
        <Work />
        <Skills />
      </div>
      <div className=' bg-neutral-100' >
        <Projects />
      </div>
      <div className='bg-violet-800' >
        <Contact />
      </div>

    </>
  )
}

export default App
