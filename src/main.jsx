import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Skills from './skills.jsx'
import Services from './service.jsx'
import Projects from './project.jsx'
import Form from './form.jsx'
import Footer from './footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <About />
    < Skills />
    < Services/>
    <Projects />
    <Form />
    <Footer/>
  </StrictMode>,
)
