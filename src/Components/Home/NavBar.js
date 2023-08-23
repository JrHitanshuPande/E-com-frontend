import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const {user} = props;
    return (
        <>
            <nav className="Nav-container">
                <div className="logo"><Link to="/">E-store</Link></div>
                <div className="Nav-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Cart">Cart</Link></li>
                        {
                            user ? <li><Link to="/profile">Profile</Link></li> : <li><Link to="/register">Login</Link></li>
                        }
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default NavBar