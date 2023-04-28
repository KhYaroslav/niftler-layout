import { Link } from 'react-router-dom'
import './style.css'
import nft from '../../assets/svg/nft-1.svg'
import { useEffect, useState } from 'react';

export default function Main() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft - hours * 3600) / 60);
  const seconds = timeLeft % 60;

  const time = { hours, minutes, seconds };
      
  return (
  <main className='main'>
    <div className='container'>
      <div className='main__items'>
        
        <div className="intro">
          <h1 className='intro__title'>
          Disсover, collect and sell dope NFTs
          </h1>
          <p className='intro__subtitle'>
          The wold largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs)
          </p>
          <div className='intro__creation'>
            <Link to='#!' className='intro__creation-explore'>Explore</Link>
            <Link to='#!' className='intro__creation-create'>Create</Link>
          </div>
          <ul className='intro__stats'>
            <li className='intro__stats-item'>
              <p className='intro__stats-index'>42k+</p>
              <p className='intro__stats-title'>User Active</p>
            </li>
            <li className='intro__stats-item'>
              <p className='intro__stats-index'>8k+</p>
              <p className='intro__stats-title'>Artworks</p>
            </li>
            <li className='intro__stats-item'>
              <p className='intro__stats-index'>2k+</p>
              <p className='intro__stats-title'>Artist</p>
            </li>
          </ul>
        </div>
        
        <div className='auction'>
          <div className='auction__items'>
            <div className='auction__content'>
                <img src={nft} alt="nft" className='auction__item-pic' />
            </div>
            <div className='auction__info'>
              <div className='auction__info-bid'>
                  <p className='auction__info-first'>Current Bid</p>
                  <p className='auction__info-second'>5.00 ETH</p>
                  <p className='auction__info-last'>$11,373.55</p>
              </div>
              
              <div className='auction__info-ends'>
                <span className='auction__info-first'>Auction ends in</span>
                <ul className='auction__info-ends-items'>
                      <li className='auction__info-ends-item' >
                        <p className='auction__info-second'>{time.hours}</p>
                        <p className='auction__info-last'>Hours</p>
                      </li>
                  <li className='auction__info-ends-item'>
                      <p className='auction__info-second'>{time.minutes}</p>
                    <p className='auction__info-last'>Mins</p>
                  </li>
                  <li className='auction__info-ends-item'>
                    <p className='auction__info-second'>{time.seconds}</p>
                    <p className='auction__info-last'>Secs</p>
                  </li>
                </ul>
              </div>
              
              <div className='auction__info-action'>
                <Link to="#!" className='auction__info-action-bid'>Bid now</Link>
                <Link to="#!" className='auction__info-action-see'>See item</Link>
              </div>
              
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </main>
  )
}
