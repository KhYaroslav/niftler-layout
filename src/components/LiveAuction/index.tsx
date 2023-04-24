import { Link } from 'react-router-dom'
import './style.css'
import auction_1 from '../../assets/img/auction-1.jpg';
import auction_2 from '../../assets/img/auction-2.jpg';
import auction_3 from '../../assets/img/auction-3.jpg';
import auction_auhor_1 from '../../assets/img/auction-author-1.jpg';
import auction_auhor_2 from '../../assets/img/auction-author-2.jpg';
import auction_auhor_3 from '../../assets/img/auction-author-3.jpg';
import heart from '../../assets/svg/heart-icon.svg'


export default function LiveAuction() {
  const items = [
    { author_img: auction_auhor_1, img: auction_1, title: 'Onus Medu', author: 'By davincidante', highest: '0.02', price: '5.12', stock: '8' },
    { author_img: auction_auhor_2, img: auction_2, title: 'Dream Big', author: 'Bi Itvrn',  highest: '0.02', price: '2.45', stock: '6' },
    { author_img: auction_auhor_3, img: auction_3, title: 'Oddoties', author: 'By davincidante',  highest: '0.02', price: '1.45', stock: '3'}
  ]

  return (
    <div className='auction'>
      <div className="auction__wrapper">
        <h3 className='auction__title'>Live Auction</h3>
        
        <div className="auction__items">
          {items.map((item, index) =>
            <div className="auction__item" key={index}>
              <div className='auction__item-img'>
                <img src={item.img} alt={item.title} className='auction__item-img-pic' />
                <img src={item.author_img} alt={item.author} className='auction__item-author-pic' />
                <img src={heart} alt='heart' className='auction__item-heart-icon' />
              </div>
              
              <div className='auction__item-desc'>
              
                <div className='auction__item-desc-left'>
                  <span className='auction__item-desc-left-title'>{item.title}</span>
                  <span className='auction__item-desc-left-author'>{item.author}</span>
                  <span className='auction__item-desc-left-highest'>Highest bid 
                    <span className='auction__item-desc-left-highest-currency'>{item.highest}Ethh</span>
                  </span>
                </div>

                <div className='auction__item-desc-right'>
                  <div className="auction__item-desc-right-price">{item.price} ETH</div>
                  <div className="auction__item-desc-right-stock">{item.stock} in stock</div>
                </div>
              </div>

              <div className='auction__item-link'>
                <Link to='#!' className='auction__item-link-bid'>Plece Bid</Link>
                <Link to='#!' className='auction__item-link-view'>View</Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
