import React, { Component } from 'react'

export class Counter  extends Component {
    constructor(){
        super()
    
    this.state={
        count:0
    }
}
increment()
{
    // this.setState({
    //     count: this.state.count+1
    // }, ()=>console.log("callback value="+this.state.count))
    // console.log(this.state.count)
    this.setState((prevState)=>({
        count: prevState.count+1
    }))
}
decrement()
{
    this.setState({
        count: this.state.count-1
    }, ()=>console.log("callback value="+this.state.count))
    console.log(this.state.count)

}
incrementFive()
{
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
  render() {
    return (
      <div><center>
        <h1>
            Count:{this.state.count}
        </h1>
        <button onClick={()=>this.increment()}>Increment </button>
        <button onClick={()=>this.decrement()}>Decrement </button>
        <button onClick={()=>this.incrementFive()}>FiveIncrement </button>
       
       
        </center></div>
    
    )
  }
}

export default Counter