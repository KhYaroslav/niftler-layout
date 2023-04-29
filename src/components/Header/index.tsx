import './style.css'
import logo from '../../assets/svg/logo-icon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import close from '../../assets/svg/close-icon.svg';

export default function Header() {
  const [open, setOpen] = useState(false);

  const Links = ['Home', 'Market', 'Discover', 'Commonty', 'Wallet'];

  const openNavHandler = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className="header">
      <div className='header__wrapper'>
        <div className='header__logo'>
          <Link to='/' className='header__logo-link'>
            <img src={logo} alt="nifter" className='header__logo-pic'/>
            <p className='header__logo-title'>Nifter</p>
          </Link>
        </div>
        <nav className={`header__list ${open ? 'header__list-active' : ''}`}>
          <ul className='header__list-items'>
            {Links.map((link) =>
              <li className='header__list-item'>
                <Link to='#!' className='header__list-item-link'>
                  {link}
                </Link>
              </li>
              )}
          </ul>
        <div className='header__list-close' onClick={openNavHandler}>
          <img src={close} alt="close" />
        </div>
        </nav>
        <div className='header__burger burger' onClick={openNavHandler}>
            <span className='burger__line burger__line-first'></span>
            <span className='burger__line burger__line-second'></span>
            <span className='burger__line burger__line-third'></span>
        </div>
        <div className='header__explors-items'>
          <input placeholder='Search' className='header__expolors-field' />
          <Link to='#!' className='header__expolors-link'>Explor</Link>
        </div>
      </div>
    </div>
  )
}
