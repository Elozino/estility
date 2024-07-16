import { ContentProp } from "../type"

const Content = ({ icon, text, link }: ContentProp) => {
  return (
    <div className="card_content_wrapper">
      <div className="card_content_icon">{icon}</div>
      <div className="card_content_text">
        {link ? (
          <a href={link} target='_blank'>{text}</a>
        ) : text}
      </div>
    </div>
  )
}

export default Content