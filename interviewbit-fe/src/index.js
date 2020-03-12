import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import './index.css'
import axios from 'axios'
import Interviews from './Components/Interviews/Interviews'
import Create from './Components/Create/Create'
import Edit from './Components/Edit/Edit'

class App extends React.Component {

  state = {
    attendants: []
  }

  componentDidMount() {
    axios.get('http://localhost:8000/attendants')
    .then(data => {
      this.setState({
        attendants: data.data
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <nav>
          <NavLink to='/'>Interviews</NavLink>
          <NavLink to='/create'>Create</NavLink>
        </nav>
        <Switch>
          <Route path='/edit/:id' component={Edit} />
          <Route path='/create' render={(props) => <Create  {...props} attendants={this.state.attendants} />} />
          <Route path='/' render={(props) => <Interviews {...props} attendants={this.state.attendants} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
