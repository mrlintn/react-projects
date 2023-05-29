import React, { Component } from 'react';
import { Account } from './Account';
import logo from './ga.png';


class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name='Checking' />
        <Account name='Deposit' />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
