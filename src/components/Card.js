function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="grid__card" >
      <img src={props.card.link} alt={props.card.name} className="grid__image" onClick={handleClick} />
      <button type="button" aria-label="Удалить" className="grid__trash"></button>
      <div className="grid__signature">
        <h2 className="grid__name">{props.card.name}</h2>
        <div className="grid__signature_group">
          <button type="button" aria-label="Нравится" className="grid__like"></button>
          <div className="grid__like_count">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
