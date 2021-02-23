import React from 'react'
 
const Notes = (props) => {
    const renderNotes = () =>{
        return props.notes.map( note => {
            return (
                <div className="note-container">
                    <h1>{note.title}</h1>
                    <p>id: {note.id}</p>
                    <a href={`/notes/${note.id}`}>view</a>
                    <hr/>
                    <p>{note.description}</p>
                 </div>   
            )
        })
    }


    return(
        <div>
            <h1>Notes</h1>
            <a href='/notes/new'> new note form</a>
            {renderNotes()}
        </div>   
    )
}

export default Notes