import React from 'react'

interface Root {
  children: React.ReactNode
}

const Card = ({ children }: Root) => {
  return (
    <div className="card">{children}</div>
  )
}

Card.displayName = "Card"

Card.Image = ({ children }: Root) => {
  return <div className="card_image">
    {children}
  </div>
}

Card.Header = ({ children }: Root) => {
  return <div className="card_header">
    {children}
  </div>
}

Card.Content = ({ children }: Root) => {
  return <div className="card_content">
    {children}
  </div>
}

export default Card;