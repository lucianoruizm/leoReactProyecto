import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-lg bg-primary navbar-container">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand color-name title">Movie Room</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/category/" + 28} className="nav-link color-link">Acción</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/" + 27} className="nav-link color-link">Terror</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/" + 18} className="nav-link color-link">Drama</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/" + 12} className="nav-link color-link">Aventura</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/" + 35} className="nav-link color-link">Comedia</Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/" + 878} className="nav-link color-link">Ciencia Ficción</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavBar