import { Link } from 'react-router-dom';
import './style.css';
import info_icon_1 from '../../assets/svg/info-icon-1.svg';
import info_icon_2 from '../../assets/svg/info-icon-2.svg';
import info_icon_3 from '../../assets/svg/info-icon-3.svg';
import info_icon_4 from '../../assets/svg/info-icon-4.svg';


export default function Info() {

  const informations = [
    {img: info_icon_1, title: 'Set up your wallet', description: 'To set up Apple Pay, add a debit, credit, or prepaid card to the Wallet app on your iPhone, Apple Watch, or other compatible device.'},
    {img: info_icon_2, title: 'Create collection', description: 'In the command, name is name of collection to be created. Options is a document and is used to specify configuration'},
    {img: info_icon_3, title: 'Add your NFTs', description: 'If you want to create a series of NFTs, you can use a collection to do so — on Rarible, you can create one right from the NFT creation screen'},
    {img: info_icon_4, title: 'List item for sale', description: 'Creating a listing is the first step in getting your item in front of ... We have a range of tools and options to help make sure your listing ends in a sale.'},
  ]

  return (
    <div className='info'>
      <div className="container">
        <div className='info__blocks'>
          
          <div className='info__block-left'>
            <h3 className='info__block-left-title'>Hot it Workss</h3>
            <p className='info__block-left-desc'>
              Getting started and seling your
              Nfts.Explore the full process so you
              dont have any cpnfusions.
            </p>
            <Link to="#!" className='info__block-left-link'>Load More</Link>
          </div>

          <div className='info__block-right'>
            {informations.map((information) =>
              <div className='info__block-right-item'>
                <img src={information.img} alt={information.title} className='info__block-right-item-pic' />
                <h5 className='info__block-right-item-title'>{information.title}</h5>
                <p className='info__block-right-item-desc'>{information.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
