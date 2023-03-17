import React, { Component } from 'react'
export class Main extends Component {

state={
    count:0,

  }
 changeCount=()=>{
      this.setState({
        count:this.state.count+1
      })
  }
  mystyle={
    color:"green",
    fontSize:"60px"

  }
  render() {
    
  return (
      <div className='App'>
        <h1 style={{color:"red"}}>{this.props.name}</h1>
      <h2 style={this.mystyle}>{this.state.count}</h2>
      <button style={{color:"blue",backgroundColor:"yellow"}}onClick={this.changeCount}>Click here</button>
      </div>
    )
  }
}

export default Main