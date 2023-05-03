import React from 'react'
import { api } from '../utils/Api'
import Card from './Card'

function Main({ onAddPlace, onEditAvatar, onCardClick, onEditProfile }) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([{ name, about, avatar }, cards]) => {
        setUserAvatar(avatar)
        setUserDescription(about)
        setUserName(name)
        setCards(cards)
      })
      .catch(console.log)
  }, [])

  return (
    <>
      <main className="content">
        <section className="profile">
          <button type="button" className="profile__container" onClick={onEditAvatar} >
            <img src={userAvatar} alt="Аватарка профиля" className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" aria-label="Редактировать профиль" className="profile__open" onClick={onEditProfile}></button>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button type="button" aria-label="Добавить" className="profile__add" onClick={onAddPlace}></button>
        </section>
        <section className="grid">
          {cards.map(card => {
            return <Card card={card} key={card._id} onCardClick={onCardClick} />
          })}
        </section>
      </main >
    </>
  )
}

export default Main