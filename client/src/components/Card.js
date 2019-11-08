import React, { Component } from 'react'
import API from "./../utils/API";




class Card extends Component {

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.props.loadArticles())
      .catch(err => console.log(err));
  }

  saveArticle = props => {
    console.log("props save art ", props)
    const savedArticle = {
      title: props.title,
      img: props.img,
      p: props.p
    }
    API.saveArticle(props._id, savedArticle)
      .then(res => {
        console.log("saved")
        this.deleteArticle(props._id)
        this.props.loadArticles()
      })

  }

  render() {
    return (
      <div className="container text-center">
        <div className="container text-center m-2 shadow p-3 bg-white rounded" key={this.props._id}>
          {console.log("card this.props" + this.props)}
          <div className="card p-3">
            <div className="row ">
              <div>
                <img className="shadow" src={this.props.img} alt="" />
              </div>
              <div className="col-7">
                <h3 className="mt-4">{this.props.title}</h3>
                <p>{this.props.p}</p>
              </div>
              <div className="col-2">
                <div className="row">
                  <button onClick={() => this.saveArticle(this.props)} className="btn col-6 float-right btn-xs btn-success mt-4">Save</button>
                </div>
                <div className="row">
                  <button onClick={() => this.deleteArticle(this.props._id)} className="btn col-6 float-right btn-xs btn-danger mt-1" >Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
