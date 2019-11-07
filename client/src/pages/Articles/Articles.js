import React, { Component } from "react";
import API from "./../../utils/API";
import Card from './../../components/Card'
import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';




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
        <Nav loadArticles={this.loadArticles}/>
        <Header title="Mongo Scraper"/>
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
        <Footer />
      </div>
    )
  }
}
export default Articles