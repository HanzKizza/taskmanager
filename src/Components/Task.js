import React from 'react'

function Task({task}) {
  return (
    <div className='task'>
      <h1>{task.text}</h1>
    </div>
  )
}

export default Task
