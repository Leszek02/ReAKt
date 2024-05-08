import { useState } from 'react'
import { styled } from 'styled-components'


function NewTask ( {setTasks, tasks} ) {

    const submitHandler = (e) => {
        e.preventDefault();
        const name = e.currentTarget.newTask.value;
        if ( name !== ""){
            console.log(name);
            setTasks(( tasks ) => [...tasks, name])
            e.currentTarget.newTask.value = "";
        } else {
            alert('Zły string peeposhy');
        }
    }

  return (
    <>
        <form onSubmit={ submitHandler }>
            <input type='text' name='newTask' />
            <button type='submit'>Add</button>
        </form>
    </>
  )
}

export default NewTask;