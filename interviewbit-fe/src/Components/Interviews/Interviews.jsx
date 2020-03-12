import React, { Component } from 'react'
import Axios from 'axios'
import Interview from './Interview/Interview'

class Interviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interviews: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8000/interviews')
    .then(data => {
      this.setState({
        interviews: data.data
      })
    })
  }

  render() {
    const interviewList = [...this.state.interviews].reverse().map((interview, index) => {
      return <Interview key={index} {...interview} />
    })

    return (
      <div>
        <h1>Interviews</h1>
        {interviewList}
      </div>
    )
  }
}

export default Interviews
