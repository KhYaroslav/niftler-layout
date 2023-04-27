import './style.css'
import collection_1 from '../../assets/img/collection-1.jpg';
import collection_2 from '../../assets/img/collection-2.jpg';
import collection_3 from '../../assets/img/collection-3.jpg';
import collection_4 from '../../assets/img/collection-4.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

export default function Collection() {

  const collections = [
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
    { img_1: collection_1, img_2: collection_2, img_3: collection_3, big_img: collection_4, title: 'Abstract', quantity: 24 },
  ]

  return (
    <div className='collection'>
      <div className="collection__wrapper">
        <h3 className='collection__title'>Hot Collection</h3>
        <div className='collection__items'>
        <Swiper
          modules={[Pagination, Grid]}
          slidesPerView={3}
          grid={{
            rows: 2,
            }}
          pagination={{
            clickable: true,
            }}
        >
        {collections.map((collection) =>
          <SwiperSlide>
            <div className='collection__item'>
              <div className="collection__item-top">
                <img src={collection.img_1} alt={collection.title} className='collection__item-top-pic' />
                <img src={collection.img_2} alt={collection.title} className='collection__item-top-pic' />
                <img src={collection.img_3} alt={collection.title} className='collection__item-top-pic' />
              </div>
              <div className="collection__item-bottom">
                <img src={collection.big_img} alt={collection.title} className='collection__item-bottom-pic' />
              </div>
              <div className='collection__item-info'>
                <span className='collection__item-info-title'>{collection.title}</span>
                <span className='collection__item-info-quantity'>{collection.quantity} items</span>
              </div>
            </div>
          </SwiperSlide>
          )}
        </Swiper>
        </div>
      </div>
    </div>
  )
}
