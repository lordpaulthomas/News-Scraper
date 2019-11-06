import React from 'react'
import './style.css'

const Nav = props => {

    return (
      <div className="bg-dark">
        <nav id="nav" className="ml-3  text-light"> Mongo Scraper
        <button onClick={props.scrapeClick} className="btn btn-outline-info m-3">Scrape</button>
        <button onClick={props.clearClick} className="btn btn-outline-info m-3">Clear</button>
        </nav>
      </div>
    )
  }


export default Nav