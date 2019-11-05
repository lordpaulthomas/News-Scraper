import React, { Component } from "react";
import API from "./../../utils/API";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    img: "",
    p: ""
  };


  componentDidMount() {

    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", img: "", p: "" })
      )
      .catch(err => console.log(err));
      console.log(this.state.articles)
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={this.state.img} alt="" />
      </div>
    )
  }
}
export default Articles