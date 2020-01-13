import React, { Component } from 'react'
import API from "./../utils/API";

import './style.css'


class Card extends Component {

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.props.loadArticles())
      .catch(err => console.log(err));
  }

  saveArticle = props => {
    const savedArticle = {
      title: props.title,
      img: props.img,
      p: props.p
    }
    API.saveArticle(props._id, savedArticle)
      .then(res => {
        this.deleteArticle(props._id)
        this.props.loadArticles()
      })
      .then(this.deleteArticle(props._id))
      .catch(err => console.log(err))

  }

  render() {
    return (
      <div className="container text-center">
        <div className="container text-center m-2 shadow p-3 bg-white rounded" key={this.props._id}>
          <div className="card p-3">
            <div className="row">
              <img className="col-3" src={this.props.img} alt="" />
              <div className="col-9">
                <h3 className="row">{this.props.title}</h3>
                <p className="row">{this.props.p}</p>
                <button onClick={() => this.saveArticle(this.props)} className="btn col-6 float-right btn-xs btn-success mt-4">Save</button>
                <button onClick={() => this.deleteArticle(this.props._id)} className="btn col-6 float-right btn-xs btn-danger mt-1" >X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
