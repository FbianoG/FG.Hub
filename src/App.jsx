import { useState } from 'react'
import './App.css'
import Plans from './pages/Plans/Plans'
import Terms from './pages/Terms/Terms'
import Guias from './pages/Guias/Guias'
import Label from './pages/Label/Label'
import Ramais from './pages/Ramais/Ramais'
import Sites from './pages/Sites/Sites'
import Config from './pages/Config/Config'
import Home from './pages/Home/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function App() {

  const [pageActive, setPageActive] = useState('home')
  const [dataGuia, setDataGuia] = useState({})
  const [token, setToken] = useState(null)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planos" element={<Plans />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/guias" element={<Guias pageActive={setPageActive} dataGuia={setDataGuia} />} />
          <Route path="/etiqueta" element={<Label />} />
          <Route path="/ramais" element={<Ramais />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </Router>

      {/* {pageActive === 'guia' && <Guia dataGuia={dataGuia} />} */}
    </>
  )
}
