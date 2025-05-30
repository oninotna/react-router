import { NavLink } from "react-router-dom";

export default function Header () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">React Routes</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home page</NavLink>                 
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/info">Chi siamo</NavLink>                 
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/posts">Lista dei post</NavLink>                 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}