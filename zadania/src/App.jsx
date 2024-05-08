import { useState } from 'react'
import { styled } from 'styled-components'
import ToDoList from './components/ToDoList.jsx'
import NewTask from './components/NewTask.jsx'

const TaskList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`

function App() {

  const [tasks, setTasks] = useState(['chlanie', 'ćpanie', 'ruchanie'])

  return (
    <>
      <TaskList>
        <ToDoList tasks={ tasks } />
        <NewTask setTasks={ setTasks } tasks={ tasks } />
      </TaskList>
    </>
  )
}

export default App