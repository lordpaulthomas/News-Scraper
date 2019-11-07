import React, { Component } from 'react'
import { Link } from "react-router-dom"
import API from "./../../utils/API"
import './style.css'
import axios from 'axios'


class Nav extends Component {

  deleteAll = () => {
    API.deleteAllArticles()
      .then(res => {
        this.props.loadArticles()
      })
      .catch(err => console.log(err));
  }

  scrapeArticles = () => {
    API.scrapeArticles()
      .then(res => {
        this.props.loadArticles()
      })
      .catch(err => console.log(err))
  }



  render() {
    console.log("nav props", this.props)
    return (
      <div className="bg-dark">
        <ul className="nav nav-tabs">
          <h1 id="nav" className="ml-3 mr-3 text-light"> Mongo Scraper</h1>

          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
              Saved
            </Link>
          </li>

          <button onClick={this.scrapeArticles} className="btn btn-outline-info">Scrape</button>
          <button onClick={this.deleteAll} className="btn btn-outline-info">Clear</button>
        </ul>

      </div>
    )
  }
}

export default Nav