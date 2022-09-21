import React from 'react'
import './SearchResults.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';

function SearchResults({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
  return (
    <div className='SearchResults'>
        <img src={img} alt=""/>
        <FavoriteBorderIcon className='searchResultHeart'/>
        <div className='searchResultInfo'>
            <div className='infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>_____</p>
                <p>{description}</p>
            </div>
            <div className='infoBottom'>
                <div className='searchResultStars'>
                    <StarRateIcon className="searchResultStar"/>
                    <p><strong>{star}</strong></p>
                </div>
                <div className='searchResultPrice'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SearchResults