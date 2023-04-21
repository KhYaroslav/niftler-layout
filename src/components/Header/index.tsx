import './Header.css'
import logo from '../../assets/svg/logo-icon.svg';
import { Link } from 'react-router-dom';

export default function Header() {

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
            <Link to='#!' className='header__list-item'>
              Home
            </Link>
            <Link to='#!' className='header__list-item'>
              Market
            </Link>
            <Link to='#!' className='header__list-item'>
              Discover
            </Link>
            <Link to='#!' className='header__list-item'>
              Commonity
            </Link>
            <Link to='#!' className='header__list-item'>
              Wallet
            </Link>
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
