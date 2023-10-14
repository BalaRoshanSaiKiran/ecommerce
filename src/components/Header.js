import React from 'react'
import '../css/Header.css'
const Header = () => {
  return (
    <div className='Header-main-div'>
        <div >
            <select>
                <option>unknown</option>
                <option selected>Category</option>
                <option>unknown</option>
                <option>unknown</option>
                <option>unknown</option>
            </select>
        </div>
        <div>
           <ul className='Header-ul'>
            <li>unknown</li>
            <li>unknown</li>
            <li>unknown</li>
            <li>unknown</li>
           </ul>
        </div>
        <div>
            <button>Offers</button>

        </div>
    </div>
  )
}

export default Header