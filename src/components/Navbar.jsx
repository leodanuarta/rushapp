import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">RushApp</span>
      <div className="user">
        <img src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/09/20/415105221.jpg" alt="" />
        <span>Leo</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar