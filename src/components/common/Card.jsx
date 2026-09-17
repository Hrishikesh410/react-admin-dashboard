
const Card = ({title,value, description}) => {
  return (
    <div className='card'>
        <h3>{title}</h3>
        <p className='card-value'>{value}</p>
        <span>{description}</span>

    </div>
  )
}

export default Card