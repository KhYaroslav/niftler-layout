import { Link } from 'react-router-dom'
import './style.css'
import auction_1 from '../../assets/img/auction-1.jpg';
import auction_2 from '../../assets/img/auction-2.jpg';
import auction_3 from '../../assets/img/auction-3.jpg';
import auction_auhor_1 from '../../assets/img/auction-author-1.jpg';
import auction_auhor_2 from '../../assets/img/auction-author-2.jpg';
import auction_auhor_3 from '../../assets/img/auction-author-3.jpg';
import heart from '../../assets/svg/heart-icon.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function LiveAuction() {
  const items = [
    { author_img: auction_auhor_1, img: auction_1, title: 'Onus Medu', author: 'By davincidante', highest: '0.02', price: '5.12', stock: '8' },
    { author_img: auction_auhor_2, img: auction_2, title: 'Dream Big', author: 'Bi Itvrn',  highest: '0.02', price: '2.45', stock: '6' },
    { author_img: auction_auhor_3, img: auction_3, title: 'Oddoties', author: 'By davincidante', highest: '0.02', price: '1.45', stock: '3' },
    { author_img: auction_auhor_1, img: auction_1, title: 'Onus Medu', author: 'By davincidante', highest: '0.02', price: '5.12', stock: '8' },
    { author_img: auction_auhor_2, img: auction_2, title: 'Dream Big', author: 'Bi Itvrn',  highest: '0.02', price: '2.45', stock: '6' },
    { author_img: auction_auhor_3, img: auction_3, title: 'Oddoties', author: 'By davincidante', highest: '0.02', price: '1.45', stock: '3' },
    { author_img: auction_auhor_1, img: auction_1, title: 'Onus Medu', author: 'By davincidante', highest: '0.02', price: '5.12', stock: '8' },
    { author_img: auction_auhor_2, img: auction_2, title: 'Dream Big', author: 'Bi Itvrn',  highest: '0.02', price: '2.45', stock: '6' },
    { author_img: auction_auhor_3, img: auction_3, title: 'Oddoties', author: 'By davincidante',  highest: '0.02', price: '1.45', stock: '3'}
  ]

  return (
    <div className='auctions'>
      <div className="auctions__wrapper">
        <h3 className='auctions__title'>Live Auction</h3>
        
        <Swiper
            loop
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            navigation={{
              prevEl: '.prev-element',
              nextEl: '.next-element',
            }}
          >
        {items.map((item, index) => (
          <SwiperSlide>
            <div className="auctions__item" key={index}>
              <div className='auctions__item-img'>
                <img src={item.img} alt={item.title} className='auctions__item-img-pic' />
                <img src={item.author_img} alt={item.author} className='auctions__item-author-pic' />
                <img src={heart} alt='heart' className='auctions__item-heart-icon' />
              </div>
              
              <div className='auctions__item-desc'>
              
                <div className='auctions__item-desc-left'>
                  <span className='auctions__item-desc-left-title'>{item.title}</span>
                  <span className='auctions__item-desc-left-author'>{item.author}</span>
                  <span className='auctions__item-desc-left-highest'>Highest bid 
                    <span className='auctions__item-desc-left-highest-currency'>{item.highest}Ethh</span>
                  </span>
                </div>

                <div className='auctions__item-desc-right'>
                  <div className="auctions__item-desc-right-price">{item.price} ETH</div>
                  <div className="auctions__item-desc-right-stock">{item.stock} in stock</div>
                </div>
              </div>

              <div className='auctions__item-link'>
                <Link to='#!' className='auctions__item-link-bid'>Plece Bid</Link>
                <Link to='#!' className='auctions__item-link-view'>View</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
          <div className="swiper-button-prev prev-element"/>
          <div className="swiper-button-next next-element"/>
          </Swiper>
        </div>

    </div>
  )
}
