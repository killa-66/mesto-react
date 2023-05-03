import PopupWithForm from "./PopupWithForm";

function PopupAddCad({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={'popupAddCard'}
      title='Новое место'
      onClose={onClose}
      isOpen={isOpen}
      textButton='Создать'
      children={
        <>
          <div className="form__section">
            <input type="text" name="name" placeholder="Название" className="form__input"
              id="nameCard" minLength="2" maxLength="30" required />
            <span className="form__input-error nameCard-error"></span>
          </div>
          <div className="form__section">
            <input type="url" name="link" placeholder="Ссылка на картинку" className="form__input"
              id="imageCard" required />
            <span className="form__input-error imageCard-error"></span>
          </div>
        </>
      }
    />
  )
}

export default PopupAddCad