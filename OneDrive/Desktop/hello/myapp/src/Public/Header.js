import React from 'react'


 function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                Welcome {props.Username}
            </nav>
        </div>
    )
}

export default Header

