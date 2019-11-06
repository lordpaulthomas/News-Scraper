import React, { Component } from "react";
import API from "./../../utils/API";
import Card from '../../components/Card'
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
      .then(res => {
        this.setState({ articles: res.data })        
      })
      .catch(err => console.log(err));
      
  }

  render() {
    console.log(this.state.articles)
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <Card key={article._id}
              _id={article._id}
              title={article.title}
              p={article.p}
              img={article.img}
              loadArticles={this.loadArticles}
              />
          )
        })}
      </div>
    )
  }
}
export default Articles