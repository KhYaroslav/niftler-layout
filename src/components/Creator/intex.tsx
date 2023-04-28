import './style.css';
import compass from '../../assets/svg/compass-icon.svg';

export default function Creator() {
  return (
    <div className='creator'>
      <div className='container'>
        <div className='creator__block'>
        
          <div className='creator__block-left'>
            <h3 className='creator__block-title'>Are you a digital creator?</h3>
            <p className='creator__block-descriptin'>
              Learn how Marketplace helps you protect and sell your
              unique digital creations, and join our growing community
              of thousand digital creators
            </p>
            <form className='creator__block-form'>
              <input placeholder='Enter your email' className='creator__block-inp' />
              <button type='submit' className='creator__block-btn'>Get started</button>
            </form>
          </div>
        
        
          <div className='creator__block-right'>
            <img src={compass} alt="compass" className='creator__block-pic' />
          </div>
          
        </div>
      </div>
    </div>
  )
}
