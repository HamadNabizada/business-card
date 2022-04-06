import React from 'react'

export default function Info(){
    return(
        <div className='Info-wrapper'>
            <div className="img-wrapper"></div>
            <div className="info-name">
                <h1>Hamad Nabizada</h1>
                <h3>Frontend Developer</h3>
                <h4>hamadnabizada.website</h4>
            </div>
            <div className="button-wrapper">
                <button className='btn btn-email'><i class="fa fa-envelope" aria-hidden="true"></i>Email</button>
                <button className='btn btn-linkedin'><i class="fa fa-linkedin"></i>LinkedIn</button>
            </div>

        </div>
    )
}