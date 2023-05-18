import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupAddCard from './PopupAddCard';
import PopupDeleteCard from './PopupDeleteCard';
import PopupEditAvatar from './PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardContext } from '../contexts/CardContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([data, res]) => {
      setCurrentUser(data);
      setCards(res)
    })
    .catch(err =>
      console.log('Error :', err))
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUserInfo(info) {
    setIsLoading(true);
    api.patchUserInfo(info)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err =>
        console.log('Error :', err))
      .finally(
        setIsLoading(false)
      )
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api.patchAvatarInfo(avatar)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err =>
        console.log('Error :', err))
      .finally(
        setIsLoading(false)
      )
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err =>
          console.log('Error :', err))
    }
    else {
      api.putLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err =>
          console.log('Error :', err))
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(res => {
        setCards((state) => state.filter((c) => c._id !== card._id))
      })
      .catch(err =>
        console.log('Error :', err))
      .finally(
    )
  }

  function handleAddNewPlace(newCard) {
    setIsLoading(true);
    api.postNewCard(newCard)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(err =>
        console.log('Error :', err))
      .finally(
        setIsLoading(false)
      )
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardContext.Provider value={cards}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
          <PopupWithForm />
          <PopupEditAvatar
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            stateLoading={isLoading}
          />
          <PopupAddCard
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddNewPlace}
            stateLoading={isLoading}
          />
          <PopupEditProfile
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdate={handleUpdateUserInfo}
            stateLoading={isLoading}
          />
          <PopupDeleteCard
            onClose={closeAllPopups}
          />
        </div>
      </CardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;