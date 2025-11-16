import { ContactForm } from "./components/ContactForm/ContactForm"
import { Footer } from "./components/Footer/Footer"
import { HeroInfo } from "./components/HeroInfo/HeroInfo"
import { ProjectsContainer } from "./components/ProjectsContainer/ProjectsContainer"
import { TechDetails } from "./components/TechDetails/TechDetails"

function App() {

  return (
    <>
     <HeroInfo/>
     <TechDetails/>
     <ProjectsContainer/>
     <ContactForm/>
     <Footer/>
    </>
  )
}

export default App
