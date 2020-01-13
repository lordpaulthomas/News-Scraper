import React, { Component } from "react";
import API from "./../../utils/API";
import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Card from "./../../components/Card"


class Saved extends Component {

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
    API.getSavedArticles()
      .then(res => {
        this.setState({ articles: res.data })
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <Nav />
        <Header title="Saved Articles" />
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

export default Saved