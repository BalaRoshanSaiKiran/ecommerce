import React from 'react'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <div className="Navbar-main-div">
        <div className='Navbar-logo'>
            <h1>Logo</h1>
        </div>
        <div className='Navbar-div2'>
            <div className='Navbar-input-div'>
                <input type="text" placeholder='search'/>
                <img className='Navbar-img' src="https://tse4.mm.bing.net/th?id=OIP.QNAx0aIErXUYCygJ9RjohgHaHa&pid=Api&P=0&h=180" alt="search"/>
            </div>
            <div className='Navbar-div3'>
                <ul className='Navbar-ul'>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
        <div className='Navbar-Homeimg-div'>
            <img className='Navbar-kart-img' src="https://tse4.mm.bing.net/th?id=OIP.9UqfoFXUzuxVO1Hs56PQogHaHa&pid=Api&P=0&h=180" alt="kart"/>
            <select className='Navbar-select'>
                <option>Location</option>
            </select>
        </div>
    </div>
  )
}
export default Navbar