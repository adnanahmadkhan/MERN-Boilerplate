import React, { Component } from 'react';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
    
    render() {
      return (
        <div style={{ backgroundColor: '#222222', top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}>
          <h1 style={{color: '#00d8ff', fontSize: 50}}>∞</h1>
          <h2 style={{color: '#00d8ff'}}>{this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  