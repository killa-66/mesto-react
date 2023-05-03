import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={'popupEditAvatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      textButton={'Сохранить'}
      children={
        <>
          <div className="form__section">
            <input type="url" name="avatar" placeholder="Ссылка на новый аватар" className="form__input"
              id="avatar" minLength="2" required />
            <span className="form__input-error avatar-error"></span>
          </div>
        </>
      }
    />
  )
}

export default PopupEditAvatar