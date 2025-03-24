
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Project'
import { Routes, Route } from "react-router-dom"

// import DarkModeToggle from './components/DarkModeToggle'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import DarkModeToggle2 from './components/DarkModeToggle2'
 

function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* Toggle Dark Mode using localStorage */}
      {/* <DarkModeToggle />  */}

      {/* Toggle Dark Mode using useContext */}
      <DarkModeToggle2 />

    </div>
  )
}

export default App