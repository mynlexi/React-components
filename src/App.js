import './App.css';
import React, { Component } from 'react';
import { render } from "react-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FooterComplex from "./components/footer/FooterComplex";
import Faq from "./components/faq/Faq"


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name : "React",
      showHideDemo1: false, 
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        break;
      default:
        
    }
  }
  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Faq />
        <div class="h-screen"></div>
        <button onClick={() => this.hideComponent("showHideDemo1")}>
              Click to Switch Footer from simple to complex
            </button>
        <div>
        
        {showHideDemo1 ? <Footer /> : <FooterComplex />}
          <hr />
        
        
        </div>
      </div>
    );
  }
}

export { App } 
