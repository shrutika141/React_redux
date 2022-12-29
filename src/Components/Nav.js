import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-light justify-content-between font-weight-bold" style={{ borderBottom: 'solid' }}>
            <Link to="/" className="navbar-brand" style={{ color: '#0229BF' }}>LNTV</Link>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn my-2 my-sm-0 border" type="submit" style={{ color: '#0229BF', backgroundColor: 'transparent' }}><i className="ri-search-line"></i></button>
            </form>
        </nav>
    )
}

export default Nav