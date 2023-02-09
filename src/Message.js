import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"

function Message() {
  return (
    <div className='message'>
        <Avatar src='' />
        <div className="message__info">
            <h4>Sergio
                <span className='message__timestamp'>Time</span>
            </h4>
            <p>Message</p>

        </div>
    </div>
  )
}

export default Message
