import React from 'react'
import logo from "../../logo.png"
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">

            <img style={{height:"40px"}} src={logo} alt="logo" />

            <div>
                <Link to="/Netflix-clone" >TV Shows</Link>
                <Link to="/Netflix-clone" >Movies</Link>
                <Link to="/Netflix-clone" >Recently Added</Link>
                <Link to="/Netflix-clone" >My List</Link>
            </div>

            <ImSearch />

        </nav>
    )
}

export default Header