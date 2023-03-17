import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='App'>
        <h1>{this.props.name}</h1></div>
    )
  }
}
