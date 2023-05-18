import { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function PopupEditProfile({ isOpen, onClose, onUpdate, stateLoading }) {
  const [nameForm, setNameForm] = useState('')
  const [description, setDescription] = useState('')
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setNameForm(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdate({
      name: nameForm,
      about: description
    })
  }

  function handleChangeName(e) {
    setNameForm(e.target.value)
  }
  function handleChangedescription(e) {
    setDescription(e.target.value)
  }

  return (
    <PopupWithForm
      name={'popupEditProfile'}
      title={'Редактировать профиль'}
      onClose={onClose}
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      textButton={stateLoading ? 'Сохранение...' : 'Сохранить'}
      children={
        <>
          <div className="form__section">
            <input type="text" name="name" placeholder="Ваше Имя" className="form__input" id="name"
              minLength="2" maxLength="40" required value={nameForm || ''}
              onChange={handleChangeName} />
            <span className="form__input-error name-error"></span>
          </div>
          <div className="form__section">
            <input type="text" name="about" placeholder="Ваша профессия" className="form__input"
              id="job" minLength="2" maxLength="200" required value={description || ''}
              onChange={handleChangedescription} />
            <span className="form__input-error job-error"></span>
          </div>
        </>
      }
    />
  )
}

export default PopupEditProfile