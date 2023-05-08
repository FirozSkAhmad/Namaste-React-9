import { Component } from 'react'
import Child from './Child'

class MyselfC extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 0,
            data: {}
        }
        // console.log("parent constructor called")
    }

    async componentDidMount() {
        // console.log("parent componentDidMount called")
        const data = await fetch("https://api.github.com/users/FirozSkAhmad")
        const json = await data.json()
        this.setState({ data: json })
        // console.log("parent", json)
        this.intervel = setInterval(() => console.log("setIntervel called CBC"), 1000)
    }

    componentDidUpdate(preProps, prevState) {
        if (prevState.count !== this.state.count) {
            // console.log("parent componentDidUpdate called")
        }
        if (prevState.count2 !== this.state.count2) {
            // console.log("parent componentDidUpdate called")
        }
        if (prevState.count !== this.state.count || prevState.count2 !== this.state.count2) {
            // console.log("parent componentDidUpdate called")
        }
    }

    componentWillUnmount() {
        console.log("parent componentWillUnmount called")
        clearInterval(this.intervel)
    }

    render() {
        // console.log("parent render called")
        return (
            <>
                <h1>It's me class component</h1>
                <h2>Name:{this.state.data.name}</h2>
                <h3>Count:{this.state.count}</h3>
                <h3>Count2:{this.state.count2}</h3>
                <button onClick={() => this.setState({ count: 0 })}>Update Count</button>
                <Child name="child1" />
                <Child name="child2" />
            </>
        )
    }
}

export default MyselfC