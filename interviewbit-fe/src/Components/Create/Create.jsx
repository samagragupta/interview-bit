import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import DateTimePicker from 'react-datetime-picker'
import Axios from 'axios'

class Create extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      start_date: new Date(),
      end_date: new Date(),
      attendants: [],
      redirect: false
    }
  }

  editTitle = v => {
    this.setState({
      title: v.target.value
    })
  }

  setAttendants = e => {
    if (e.target.checked) {
      let attendants = [...this.state.attendants]
      attendants.push(parseInt(e.target.value))
      this.setState({attendants})
    } else {
      let attendants = [...this.state.attendants].filter(v => v !== parseInt(e.target.value))
      this.setState({attendants})
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let payload = {
      title: this.state.title,
      start_time: this.state.start_date,
      end_time: this.state.end_date,
      attendants: this.state.attendants
    }

    Axios.post('http://localhost:8000/interviews', payload)
    .then(res => {
      if (res.status === 201) {
        this.setState({redirect: true})
      }
    })
  }

  render() {

    if (this.state.redirect) return <Redirect to='/' />

    if (this.props.attendants.length === 0) {
      return <p>loading...</p>
    } else {
      return (
        <div>
          <h1>Create new interview</h1>
          <form method="post" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="title" id="title" onChange={this.editTitle} value={this.state.title} />
            <div>
              <p>Start time</p>
              <DateTimePicker onChange={v => this.setState({ start_date: v})} value={this.state.start_date} />
            </div>
            <div>
              <p>End time</p>
              <DateTimePicker onChange={v => this.setState({ end_date: v})} value={this.state.end_date} />
            </div>

            <div>
              <p><b>Attendants:</b></p>
              {this.props.attendants.map(attendant => {
                return (
                  <p>
                    <label><input onChange={this.setAttendants} type="checkbox" value={attendant.id} />{attendant.name}</label>
                  </p>
                )
              })}
            </div>

            <input type="submit" value="Create" />
          </form>
        </div>
      )
    }
  }
}

export default Create
