import React from 'react'
import ReactDOM from 'react-dom'

function Header(){
    return( 
    <header>
        Hello, this is the header.
    </header>
    )

}


ReactDOM.render(<Header />, document.getElementById('root'))