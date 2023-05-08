import { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
        // console.log(this.props.name + " constructor called")
    }
    async componentDidMount() {
        // console.log(this.props.name + " componentDidMount called")
        const data = await fetch("https://api.github.com/users/FirozSkAhmad")
        const json = await data.json()
        // console.log(this.props.name, json)
    }
    render() {
        // console.log(this.props.name + " render method called")
        return (
            <h1>I'm chid {this.props.name}</h1>
        )
    }
}

export default Child