import React, { Component } from 'react'
import API from "./../utils/API";




class SavedCard extends Component {

  deleteSavedArticle = id => {
    API.deleteSavedArticle(id)
      .then(res => this.props.loadArticles())
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="container text-center">
        <div className="container text-center m-2 shadow p-3 bg-white rounded" key={this.props._id}>
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
                  <button onClick={() => this.deleteSavedArticle(this.props._id)} className="btn col-6 float-right btn-xs btn-danger mt-1" >Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SavedCard
