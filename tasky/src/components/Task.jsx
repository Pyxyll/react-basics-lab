// import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className='desc'>{props.description}</p>
            <p className={props.priorityColor}>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>

        </div>
    )



}

export default Task;

