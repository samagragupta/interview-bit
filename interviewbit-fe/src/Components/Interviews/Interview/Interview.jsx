import React from 'react'
import Moment from 'moment'

const Interview = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p><b>{Moment(props.start_time).format('HH:mm')} - {Moment(props.end_time).format('HH:MM')}</b></p>
      <p>Total participants: {props.attendants.length}</p>
    </div>
  )
}

export default Interview
