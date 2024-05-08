import { useState } from 'react'
import { styled } from 'styled-components'
import Task from './Task.jsx'


function ToDoList ( {tasks} ) {

  return (
    <>
        { tasks.map( (task, index) => <Task taskName={task} key={index}/>) }
    </>
  )
}

export default ToDoList;