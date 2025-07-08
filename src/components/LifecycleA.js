import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vinayak'
      }
      console.log("Lifecycle A Constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount()
    {
        console.log("LifecylceA componentDidmount")
    }
    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("Lifecylce A componentDidUpdate")
    }
    changeState = () => {
        this.setState({
            name:"Code to React JS Tutorial"
        })
    }
    render() {
        console.log('lifecycle  render')
        return (
        <><div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB /></>
        )
    }
}

export default LifecycleA
