import { Link } from 'react-router-dom';
import './style.css';
import twitter from '../../assets/svg/twitter-icon.svg';
import discord from '../../assets/svg/discord-icon.svg';
import instagram from '../../assets/svg/instagram-icon.svg';
import vkontakte from '../../assets/svg/vk-icon.svg';
import facebook from '../../assets/svg/facebook-icon.svg';

export default function Footer() {

  const socialsNetwork = [
    { icon: twitter, name: 'twitter' },
    { icon: discord, name: 'discord' },
    { icon: instagram, name: 'instagram' },
    { icon: vkontakte, name: 'vkontakte' },
    { icon: facebook, name: 'facebook'},
  ]

  const items = [
    { title: 'Explore', navigation: [{ link: 'Art' }, { link: 'Photography' }, { link: 'Music' }, { link: 'Games' }] },
    { title: 'My Account', navigation: [{ link: 'My profile' }, { link: 'My collections' }, { link: 'My Favorites' }, { link: 'My Account Setings' }] },
    { title: 'Resourses', navigation: [{ link: 'Help Centre' }, { link: 'Parthers' }, { link: 'Suggestions' }, { link: 'Newsletter' }] },
    { title: 'Company', navigation: [{ link: 'About' }, { link: 'Careers' }, { link: 'Rankings' }, { link: 'Activity' }] },
  ]

  return (
    <div className='footer'>
      <div className="container">
        <div className='footer__items'>
          
          <div className='footer__items-info'>
            <h3 className='footer__items-info-title'>Nifter</h3>
            <p className='footer__items-info-desc'>
            The worlds largest digital
            marketplace for
            crypto collectibities and non
            tokens (NFTs) Buy, Sell and discover
            exclusive digital assets
            </p>
            <div className='footer__items-info-social'>
              {socialsNetwork.map((social) =>
                <Link to="#!" className='footer__items-info-link'>
                  <img src={social.icon} alt={social.name} className='footer__items-info-pic' />
                </Link>
              )}
            </div>
          </div>

          <nav className='footer__nav'>
          {items.map((item, index) =>
              <ul className='footer__menu' key={index}>
                <li className='footer__menu-item'>
                  <h3 className='footer__menu-title'>{item.title}</h3>
                </li>
                {item.navigation.map((nav, index) =>
                  <li className='footer__menu-item' key={index}>
                    <Link to='#!' className='footer__menu-link'>{nav.link}</Link>
                  </li>
                )}
              </ul>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
