import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Overview( {taskList} ) {
    // const taskList = ['asd', 'asdf']
    return (
    <div>
    {taskList.map(e => {
        return <li id={uuidv4()}>{e}</li>
    })}
    </div>
  )
}
