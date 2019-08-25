import React, { Fragment } from 'react'

const Message = ({ pseudo, message, isUser }) => {
  const classUser = isUser(pseudo) ? 'user-message' : 'not-user-message'
  const displayedPseudo = isUser(pseudo) ? <Fragment /> : <strong>{ pseudo }: </strong>

  return (
    <p className={`${classUser}`}>
      { displayedPseudo }{ message }
    </p>
  )
}

export default Message
