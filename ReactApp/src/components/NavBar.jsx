import './NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

// Se le importa el estilo desde NavBar.css.
// NavBar contiene el nombre del proyecto, la lista de secciones y el componente CardWidget que fue importado.
// Se importa para que pueda usarse en App. 
const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-primary navbar-container">
        <div className="container-fluid">
          <a className="navbar-brand color-name title" href="/">Movie Room</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/category/accion"} className="nav-link color-link">Acción</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/category/terror"} className="nav-link color-link">Terror</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/category/suspenso"} className="nav-link color-link">Suspenso</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar