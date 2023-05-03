import PopupWithForm from "./PopupWithForm";

function PopupDeleteCard(props) {
  return (
    <PopupWithForm
      name={'popupDeleteCard'}
      title={'Вы уверены?'}
      onClose={props.onClose}
      isOpen={props.isOpen}
      children={
        <>
          <button type="submit" aria-label="Вы уверены?" className="form__save">Да</button>
        </>
      }
    />
  )
}

export default PopupDeleteCard