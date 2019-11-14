//@ts-check
import React, { Component } from 'react';
import './App.scss';
import openSocket from 'socket.io-client';

const socket = openSocket("http://192.168.43.45:8000");

export default class App extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    socket.on("count", (count) => {
      this.setState({ count });
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Count</h1>
        <p>{this.state.count}</p>
      </div>
    )
  }
}
