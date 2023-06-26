import React from 'react'
import Button from './Button'

function Task({task}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`}>   
      <h3>{task.text} <Button /></h3>
      <p>{task.day}</p>
    </div>
  )
}
export default Task
