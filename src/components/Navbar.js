import React from 'react'
import "../styles/nav.css"
import { } from "react-router-dom"




function Navbar() {
    return (
        <div className='nav'>
            
            <a  className='navlinks' href="#">Products</a>
            <a  className='navlinks' href="#">shops</a>
            <a  className='navlinks' href="#">Categories</a>
            <a  className='navlinks' href="#">Accessories</a>
            <a  className='navlinks' href="#">Accessories</a>
            <a  className='navlinks' href="#">Accessories</a>
            <a  className='navlinks' href="#">Accessories</a>
            
         <div className='searchbox'>
                <input type="text" name='search' placeholder='search products' />
         </div>

        </div>


    )
}

export default Navbar