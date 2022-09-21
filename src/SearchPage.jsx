import { Button } from '@mui/material';
import React from 'react';
import './SearchPage.css'
import SearchResults from './SearchResults';


function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPageInfo'>
            <p>62 stays • 26 stays to 30 • august 2 guest</p>
            <h1>Stays Nearby</h1>
            <Button variant='outlined'>Cancellation Flexibity</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms And Beds</Button>
            <Button variant='outlined'>More filters</Button>
        </div>
        <SearchResults
        img="https://a0.muscache.com/im/pictures/19fbf25a-6b04-4890-b5bb-f22d9d7ea119.jpg?im_w=720"
        location="India"
        title="Entire home hosted by Foster"
        description="Koh Chang 6 bedroom Sea View Villa with Pool"
        star={4.74}
        price="Rs 8000"
        total="Rs  129000"
        />
        <SearchResults
        img="https://a0.muscache.com/im/pictures/19fbf25a-6b04-4890-b5bb-f22d9d7ea119.jpg?im_w=720"
        location="India"
        title="Entire home hosted by Foster"
        description="Koh Chang 6 bedroom Sea View Villa with Pool"
        star={4.74}
        price="Rs 8000"
        total="Rs  129000"
        />
    </div>
  )
}

export default SearchPage