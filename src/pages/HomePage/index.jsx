import React, { Component } from "react";
import Header from "../../components/Header";

class HomePage extends Component {
  render() {
    return (
      <main>
        <Header location={this.props.location} />
      </main>
    );
  }
}

export default HomePage;
