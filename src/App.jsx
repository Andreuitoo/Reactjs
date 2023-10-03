import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import ListaEstudiantes from "./components/ListaEstudiantes"


const App = () => {

  const [estudiante, setEstudiante] = useState({})
  const [estudiantes, setEstudiantes] = useState(JSON.parse(localStorage.getItem('estudiantes')) ?? [])

  useEffect(() => {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
  }, [estudiantes])

  const borrar = (id) => {
    if (confirm('Desea eliminarlo ?')) {
      const nuevo = estudiantes.filter(est => est.id !== id)
      setEstudiantes(nuevo)
    }
  }

  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
            <span className="fs-4">Lista estudiantes</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          </ul>
        </header>
      </div>
      <div className="container text-center">
        <div className="mb-4">
              <h1>Crud básico ReactJS y Bootstrap</h1>
        </div>
        <div className="row mt-4">
          <Formulario estudiante={estudiante} estudiantes={estudiantes} setEstudiantes={setEstudiantes} setEstudiante={setEstudiante} />
          <ListaEstudiantes setEstudiante={setEstudiante} estudiante={estudiante} estudiantes={estudiantes} borrar={borrar} />
        </div>
      </div>
    </div>
  )
}

export default App