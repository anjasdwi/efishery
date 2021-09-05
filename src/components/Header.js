import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <h1>eFishery</h1>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
