import './Card.css'

interface Props {
  title: string
  imageUrl: string
  description: string
}

export const Card = (props: Props) => {
  const { title, imageUrl, description } = props

  return (
    <div className="card">
      <img className="card__image" src={imageUrl} alt={title} />
      <div className="card__body">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  )
}
