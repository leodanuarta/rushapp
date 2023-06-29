import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'  />
      </div>
      <div className="userChat">
        <img src="https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/09/20/415105221.jpg" alt="" />
        <div className="userChatInfo">
          <span>Danuarta</span>
        </div>
      </div>
    </div>
  )
}

export default Search