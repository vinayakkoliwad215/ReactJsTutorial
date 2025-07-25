import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'vinayak'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name:'vinayak'
      })
    },200)
    
  }
  
  render() {
    console.log("****** Parent Comp render ******")
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
