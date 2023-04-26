import { Link } from 'react-router-dom'
import './style.css'
import top_1 from '../../assets/img/top-1.jpg'
import top_2 from '../../assets/img/top-2.jpg'
import top_3 from '../../assets/img/top-3.jpg'
import top_4 from '../../assets/img/top-4.jpg'
import top_5 from '../../assets/img/top-5.jpg'
import top_6 from '../../assets/img/top-6.jpg'
import add_friends from '../../assets/svg/add-friends-icon.svg'
import telegram from '../../assets/svg/telegram-icon.svg'

export default function Top() {
  const contents = [
    { img: top_1, name: 'Jorg George', price: '885.6' },
    { img: top_2, name: 'Maria Stannsssss', price: '100.1' },
    { img: top_3, name: 'Kaiya Berti', price: '505.2' },
    { img: top_4, name: 'Anna Enabel', price: '45.6' },
    { img: top_5, name: 'Zain Berty', price: '42.4' },
    { img: top_6, name: 'Jordyn Nis', price: '885.6' },
    { img: top_5, name: 'Zain Berty', price: '42.4' },
    { img: top_6, name: 'Jordyn Nis', price: '885.6' },
  ]
  
  return (
   <div className='top'>
      <div className='container'>
        
        <div className='top__seller'>
          <h3 className='top__seller-title'>Top seller</h3>
          <div className='select__wrapper'>
            <select name="" id="" className='top__seller-select'>
              <option className='top__seller-option'>Today</option>
              <option className='top__seller-option'>Tomorrow</option>
            </select>
          </div>
        </div>
      
        <div className='top__cards'>
          {contents.map((content) =>
          <div className='top__card'>
            <div className='top__card-img'>
              <img src={content.img} alt={content.name} className='top__card-pic' />
            </div>
            <div className="top__card-description">
              <p className='top__card-name'>{content.name}</p>
                <div className='top__card-price'>
                  <p className='top__card-price-sum'>{content.price}</p>
                  <p className='top__card-price-eth'>Eth</p>
                </div>
              <div className='top__card-info'>
                <Link to='#!'>
                  <img src={add_friends} alt="add-friends" className='top__card-info-img'/>
                </Link>
                <Link to='#!'>
                  <img src={telegram} alt="telegram" className='top__card-info-telegram' />
                </Link>
              </div>
            </div>
          </div>
          )}
        </div>
        <div className='top__page'>
          <div className='top__page-switching-left'></div>
          <div className='top__page-switching-right'></div>
        </div>
      </div>
    </div>
  )
}
