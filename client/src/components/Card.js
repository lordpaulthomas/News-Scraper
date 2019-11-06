import React, { Component } from 'react'
import API from "./../utils/API";


class Card extends Component {

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.props.loadArticles())
      .catch(err => console.log(err));
  }


  render() {
    return (
      
      <div className="card" key={this.props._id}>
        {console.log(this.props)}
        <div className="row">
          <div className="col-3 float-right">
            <img src={this.props.img} alt="" />
          </div>
          <div className="col-7">
            <h3>{this.props.title}</h3>
            <p>{this.props.p}</p>
          </div>
          <div className="col-2">
            <div className="row">
              <button className="btn col-6 float-right btn-xs btn-success mt-4">Save</button>
            </div>
            <div className="row">
              <button onClick={() =>  this.deleteArticle(this.props._id)} className="btn col-6 float-right btn-xs btn-danger mt-1" >Remove</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
