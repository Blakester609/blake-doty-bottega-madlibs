import React, { Component } from 'react';

import Header from './header';
import Card from  './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
      </div>
    );
  }
}

export default Home;

// things we need to fix
    // placeholder
    // gray and green number labels
    // Adding in labels
    // Generate btn space/card-height
    