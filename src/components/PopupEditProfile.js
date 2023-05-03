import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(props) {
  return (
    <PopupWithForm
      name={'popupEditProfile'}
      title={'Редактировать профиль'}
      onClose={props.onClose}
      isOpen={props.isOpen}
      children={
        <>
          <div className="form__section">
            <input type="text" name="name" placeholder="Ваше Имя" className="form__input" id="name"
              minLength="2" maxLength="40" required />
            <span className="form__input-error name-error"></span>
          </div>
          <div className="form__section">
            <input type="text" name="about" placeholder="Ваша профессия" className="form__input"
              id="job" minLength="2" maxLength="200" required />
            <span className="form__input-error job-error"></span>
          </div>
          <button type="submit" aria-label="Сохранить" className="form__save">Сохранить</button>
        </>
      }
    />
  )
}

export default PopupEditProfile