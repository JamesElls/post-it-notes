import React from 'react'

const NoteNew = (props) => {
    return(
        <div>
            <h1>Form</h1>
            <a href='/notes'> cancel</a>
            <form action="/notes" method='post'>
                <p>title</p>
                <input name='note[title]' />

                <p>body</p>
                <textarea name='note[description]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default NoteNew
