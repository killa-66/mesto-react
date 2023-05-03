import vector from '../images/Vector.svg';

function Header() {
  return (
    <header className="header">
      <img src={vector} alt="Логотип Место Россия" className="header__logo" />
    </header>
  )
}

export default Header