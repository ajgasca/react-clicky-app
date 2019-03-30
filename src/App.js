import React from 'react';
import Container from "./Components/Container/Container";
import Hero from "./Components/Hero/Hero";
import './App.css';

const App = () => (
  // state = {
  //   counter : 0
  // }
  // handleImageClick = (id) => {
  //   // console.log(id);
  //   // this.setState({
  //   //   counter: this.state.counter + 1
  //   // }, () => console.log(this.state.counter))

  //   this.setState((prevState, props) => ({
  //       counter: prevState.counter + 1
  //   }));

  // };
  <div className="container-fluid mainContainer">
    <Hero />
    <Container />
  </div>

);

export default App;
