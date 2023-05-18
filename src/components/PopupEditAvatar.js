import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar({ isOpen, onClose, onUpdateAvatar, stateLoading }) {
  const inputRef = useRef()

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={'popupEditAvatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      handleSubmit={handleSubmit}
      textButton={stateLoading ? 'Сохранение...' : 'Сохранить'}
      children={
        <>
          <div className="form__section">
            <input ref={inputRef} type="url" name="avatar" placeholder="Ссылка на новый аватар" className="form__input"
              id="avatar" minLength="2" required />
            <span className="form__input-error avatar-error"></span>
          </div>
        </>
      }
    />
  )
}

export default PopupEditAvatar