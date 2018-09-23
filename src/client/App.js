import React, { Component } from 'react';
import styles from './app.css.js';
import "./app.css";
import Clock from './Clock/Clock.js';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <Clock />
    );
  }
}