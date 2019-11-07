import React, { Component } from "react";
import API from "./../../utils/API";
import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

class Saved extends Component {


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