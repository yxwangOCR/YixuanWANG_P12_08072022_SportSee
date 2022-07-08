import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import useUser from "../../hooks/useUser";

function NavBar() {
  const { data, isLoading } = useUser('18')
  console.log(isLoading)
  console.log(data)
  console.log('=========')

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img src={logo} alt='Logo-image' className='logo' />
          </Link>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                Profil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Réglage
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                Communauté
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
