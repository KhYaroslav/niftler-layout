import './style.css';
import { useState } from 'react';

export default function Artworks() {

  const [isActive, setIsActive] = useState(false);

  const HandelClick = (index: number) => {
    setIsActive((prev) => !prev)
  }

  const categories = ['Recomendations', 'Music', 'Modern Art', '3d', 'Watercolor']


  return (
    <div className='artworks'>
      <div className="container">
        <h3 className='artworks__title'>Explre Artworks</h3>
        <div className='artworks__category'>
            <ul className='artworks__category-items' >
            {categories.map((category, index) =>
              <li
                className={`artworks__category-item ${isActive ? 'artworks__category-item-active' : ''}`}
                onClick={() => HandelClick(index)}
                key={index}
              >
              {category}
              </li>
            )}
            </ul>
        </div>
      </div>
    </div>
  )
}
