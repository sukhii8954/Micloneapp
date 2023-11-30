import React from 'react'
import Heading from './Heading'
import ProductReviews from './ProductReviews'
import Videos from './Videos'
import Banner from './Banner'
import data from '../data/data'

const Homepage = () => {
  return (
    <div>
       <Heading text="PRODUCT REVIEWS"/>

<ProductReviews productReviews={data.productReviews}/>

<Heading text="VIDEOS" />

<Videos videos={data.videos} />

<Heading  text="IN THE PRESS"/>

<Banner banner={data.banner}/>
    </div>
  )
}

export default Homepage
