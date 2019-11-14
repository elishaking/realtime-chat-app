//@ts-check
import React, { Component } from 'react';
import './App.scss';
import openSocket from 'socket.io-client';

const socket = openSocket("http://192.168.43.45:8000");

export default class App extends Component {
  state = {
    count: 0,
    messageText: '',
    messages: []
  };

  componentDidMount() {
    socket.on("count", (count) => {
      this.setState({ count });
    });
  }

  onChange = (e) => {
    this.setState({
      messageText: e.target.value
    });
  };

  sendMessage = (e) => {
    e.preventDefault();

    const { messages, messageText } = this.state;
    const newMessage = {
      text: messageText,
      date: Date.now()
    }

    socket.emit('chat-msg', newMessage);
    messages.push(newMessage);

    this.setState({ messageText: '', messages });
  };

  render() {
    const { messageText, messages } = this.state;

    return (
      <div className="app">
        {/* <h1>Count</h1>
        <p>{this.state.count}</p> */}

        <div className="chat-container">
          <div className="chat-space">
            {
              messages.map((message) => (
                <div className="message">
                  <p>{message.text}</p>
                  <p className="date"><small>{new Date(message.date).toLocaleTimeString()}</small></p>
                </div>
              ))
            }
          </div>

          <div className="chat-input">
            <form id="form" onSubmit={this.sendMessage}>
              <input type="text" placeholder="Type message" value={messageText} onChange={this.onChange} />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
