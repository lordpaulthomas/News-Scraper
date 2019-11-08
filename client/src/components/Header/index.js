import React from "react"
import './style.css'


const Header = props => {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img id="titleImage" src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg"
          className="card-img"
          alt="" />
        <div className="card-img-overlay" id="title">
          <h1 className="card-title">{props.title}</h1>
          <h4 className="card-text">Coin Desk Edition</h4>
        </div>
      </div>
    </div>
  )
}

export default Header