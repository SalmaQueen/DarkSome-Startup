import React, { Component } from 'react'
import logo from '../../Images/sssss.svg'
export default class Navbar extends Component {
    render() {
        return (
            < >
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed " >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span><img src={logo} alt="Taifa Fashions" style={{width:"125px",backgroundColor:"#03045E", borderRadius:"50%", height:"115px"}}/></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pants</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Abayah</a></li>
            <li><a className="dropdown-item" href="#">Jeans</a></li>
            <li><a className="dropdown-item" href="#">khamar</a></li>

            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Hijab</a></li>
          </ul>
          
        </li>
       
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search for clothes" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </>
        )
    }
}
