import './style.css';
import { useState } from 'react';
import artworks_1 from '../../assets/img/artworks-1.jpg';
import artworks_2 from '../../assets/img/artworks-2.jpg';
import artworks_3 from '../../assets/img/artworks-3.jpg';
import artworks_4 from '../../assets/img/artworks-4.jpg';
import { Link } from 'react-router-dom';

export default function Artworks() {

  const [isActive, setIsActive] = useState(0);

  const HandelClick = (index: number) => {
    setIsActive(index === isActive ? 0 : index);
  }

  const categories = ['Recomendations', 'Music', 'Modern Art', '3d', 'Watercolor']

  const cards = [
    { img: artworks_1, title: 'Vaporart', author: 'weidner art', price: '2.45', likes: '50', available: '1'},
    { img: artworks_2, title: 'Vaporart', author: 'visual 3d', price: '4.8', likes: '30', available: '1'},
    { img: artworks_3, title: 'Vaporart', author: 'itvrn', price: '1.98', likes: '20', available: '1'},
    {img: artworks_4, title: 'Vaporart', author: 'wonder art ', price: '5.11', likes: '90', available: '1'}
  ]

  return (
    <div className='artworks'>
      <div className="container">
        <h3 className='artworks__title'>Explre Artworks</h3>
        
        <div className='artworks__category'>
            <ul className='artworks__category-items' >
            {categories.map((category, index) =>
              <li
                className={`artworks__category-item ${isActive === index ? 'artworks__category-item-active' : ''}`}
                onClick={() => HandelClick(index)}
                key={index}
              >
              {category}
              </li>
            )}
            </ul>
        </div>

        <div className='artworks__cards'>
          {cards.map((card) =>
            <div className='artworks__card'>
              <img src={card.img} alt={card.title} className='artworks__card-pic'/>
              <div className='artworks__card-desc'>
                <div className='artworks__card-desc-left'>
                  <span className='artworks__card-desc-title'>{card.title}</span>
                  <span className='artworks__card-desc-author'>by {card.author}</span>
                  <span className='artworks__card-desc-available'>1 of {card.available} available</span>
                </div>
                <div className='artworks__card-desc-right'>
                  <span className='artworks__card-desc-price'>{card.price} ETH</span>
                  <span className='artworks__card-desc-likes'>{card.likes}k</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='artworks-link'>
          <Link to="#!" className='artworks-link-more'>Load More</Link>
        </div>
      </div>
    </div>
  )
}
