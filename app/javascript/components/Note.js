import React from 'react'

const Note = (props) => {
    console.log(props)
    return(
        <div>
            <h1>sdf</h1>
            <a href='/notes'>notes</a>
           <h1>{props.note.title}</h1>
           <h6>id: {props.note.id}</h6>
        </div>
    )
}

export default Note
