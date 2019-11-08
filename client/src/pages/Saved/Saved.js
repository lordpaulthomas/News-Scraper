import React, { Component } from "react";
import API from "./../../utils/API";
import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

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
    API.getArticles()
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
        <Footer />
      </div>
    )
  }

}

export default Saved