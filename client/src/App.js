//@ts-check
import React, { Component } from 'react';
import './App.scss';
import openSocket from 'socket.io-client';

const socket = openSocket("http://192.168.43.45:8000");

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello</h1>
      </div>
    )
  }
}
