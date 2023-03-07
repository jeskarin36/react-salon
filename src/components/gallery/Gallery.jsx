import React from 'react'
import "./Gallery.css"
import Img1 from "../../assets/photo-1595218841793-d38b949402d2.avif"
import Img2 from "../../assets/photo-1508002366005-75a695ee2d17.avif"
import Img3 from "../../assets/photo-1585980658562-dc05a72b5820.avif"
import Img4 from "../../assets/photo-1554555819-f722cb0c01c5.avif"

const Gallery = () => {
  return (
    <div className='App__Gallery'>
        <div className="c1">
            <img src={Img1} alt="" />
        </div>
        <div className="c2">
            <img src={Img2} alt="" />
        </div>
        <div className="c3">
            <img src={Img3} alt="" />
        </div>
        <div className="c4">
            <img src={Img4} alt="" />
        </div>
    </div>
  )
}

export default Gallery
