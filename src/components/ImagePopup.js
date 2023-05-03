function ImagePopup(props) {
  return (
    <div className={`popup popup_shadow ${props.card ? `popup_opened` : ''}`} id="popupPhotoCard">
      <div className="popup__container popup__container_image">
        {props.card && (
          <>
            <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__image" />
            <p className="popup__name">{props.card.name}</p>
          </>)
        }

        <button type="button" aria-label="Закрыть" className="popup__close" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup