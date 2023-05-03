import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar(props) {
  return (
    <PopupWithForm
      name={'popupEditAvatar'}
      title={'Обновить аватар'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      children={
        <>
          <div className="form__section">
            <input type="url" name="avatar" placeholder="Ссылка на новый аватар" className="form__input"
              id="avatar" minLength="2" required />
            <span className="form__input-error avatar-error"></span>
          </div>
          <button type="submit" aria-label="Вы уверены?" className="form__save">Сохранить</button>
        </>
      }
    />
  )
}

export default PopupEditAvatar