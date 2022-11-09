import React from 'react';
import img1 from '../../images/banner/img1.webp';
import img2 from '../../images/banner/img2.avif';
import img4 from '../../images/banner/img4.jpg';
import img3 from '../../images/banner/img3.jpeg';
import BannerSlider from './BannerSlider';

const bannerData = [
    {
        image: img1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
       <div>
         <div className="carousel w-full  mb-9">
             {
            bannerData.map(slide => <BannerSlider
            key={slide.id}
            slide={slide}></BannerSlider>)
        }
      </div>
       </div>
    );
};

export default Banner;