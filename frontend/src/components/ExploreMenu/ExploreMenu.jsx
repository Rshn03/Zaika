import React from 'react'
import './ExploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {

    return (
        <div>
            <div className='explore-menu' id='explore-menu'>
                <h1>Explore our Menu</h1>
                <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
