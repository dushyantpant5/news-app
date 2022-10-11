
import React, { Component } from 'react'

export class Navbar extends Component {
  

  render() {
    return (
     <>
                <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">News-Paper</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>

                {/* DropDown List */}
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        {/* <li><a className="dropdown-item" href="/">General</a></li>    */}
                        <li><a className="dropdown-item" href="/">Technology</a></li>
                        <li><a className="dropdown-item" href="/">Entertainment</a></li>
                        <li><a className="dropdown-item" href="/">Business</a></li>
                        <li><a className="dropdown-item" href="/">Sports</a></li>
                        <li><a className="dropdown-item" href="/">Science</a></li>
                        <li><a className="dropdown-item" href="/">Health</a></li>
 
                    </ul>
                    </li>
                </ul>
                </div>
           
                <li className="nav-item">
                <a className="nav-link" href="/">About</a>
                </li>
             
            </ul>
            
            </div>
        </div>
        </nav>
     </>
    )
  }
}

export default Navbar