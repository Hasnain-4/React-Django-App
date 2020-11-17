import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div >
            <nav >
                <ul>                    
                    <li><a><NavLink exact activeClassName='active_class' to = '/' >Home</NavLink> </a>  </li>        
                    <li><a><NavLink activeClassName='active_class' to = '/dashboard' >Dashboard</NavLink>  </a> </li>     
                    <li><a><NavLink activeClassName='active_class' to = '/about' >About</NavLink>  </a>   </li>   
                    <li><a><NavLink activeClassName='active_class' to = '/contact' >Contact</NavLink> </a> </li>      
                </ul>
            </nav>
        </div>
    )
}

export default Nav
