import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vinayak'
      }
      console.log("Lifecycle B Constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount()
    {
        console.log("LifecylceB componentDidmount")
    }
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifecylceB componentDidUpdate")
    }
    
    render() {
        console.log('lifecycle B render')
        return (
        <div>
            LifecycleB
        </div>
        )
    }
}

export default LifecycleB
