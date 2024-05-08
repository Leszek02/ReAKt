import { useState } from 'react'
import { styled } from 'styled-components'

const CheckboxLabel = styled.label`
    text-decoration: ${ props => props.$iscrossed };
`

function Task( {taskName} ) {

const [isHidden, setIsHidden] = useState(false);
  return (
      <div>
          <input type="checkbox" id="completed" name="completed" onChange={ () => setIsHidden(!isHidden) } />
          <CheckboxLabel $iscrossed={isHidden ? 'line-through' : 'none'} htmlFor="completed">{taskName}</CheckboxLabel>
      </div>
  )
}

export default Task;