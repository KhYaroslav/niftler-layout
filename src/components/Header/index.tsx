import './style.css'
import logo from '../../assets/svg/logo-icon.svg';
import { Link } from 'react-router-dom';

export default function Header() {

  const Links = ['Home', 'Market', 'Discover', 'Commonity', 'Wallet']

  return (
    <div className="header">
      <div className='header__wrapper'>
        <div className='header__logo'>
          <Link to='/' className='header__logo-link'>
            <img src={logo} alt="nifter" className='header__logo-pic'/>
            <p className='header__logo-title'>Nifter</p>
          </Link>
          <div className='header__logo-pic-background'/>
        </div>
        <nav className='header__list'>
          <ul className='header__list-items'>
            {Links.map((link) =>
              <Link to='#!' className='header__list-item'>
                {link}
              </Link>)}
          </ul>
        </nav>
        <div className='header__explors'>
          <div className='header__expolors-wrapper'>
            <div className='header__explors-items'>
              <input placeholder='Search' className='header__expolors-field' />
              <Link to='#!' className='header__expolors-link'>Explor</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
