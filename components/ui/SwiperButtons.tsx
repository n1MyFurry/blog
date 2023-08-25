import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSwiper } from 'swiper/react';

const SwiperButtons = () => {

    const swiper = useSwiper();

  return (
    <>
        <div className="items-list-left-arrow z-20 cursor-pointer" onClick={() => {swiper.slidePrev()}}>
            <ArrowBackIcon />
        </div>
        <div className="items-list-right-arrow z-20 cursor-pointer" onClick={() => {swiper.slideNext()}}>
            <ArrowForwardIcon />
        </div>
    </>
  )
}

export default SwiperButtons