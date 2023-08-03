"use client";

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const AuthSlider = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
        <Swiper pagination={true} loop={true} autoplay={{delay: 3000}} modules={[Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center flex-col gap-10">
                    <Image src="/shapes/search.svg" width={600} height={600} alt="alt" />
                    <h1 className="text-4xl text-white font-semibold max-w-sm text-center flex justify-center items-center">New Scheduling And Routing Options.</h1>
                    <p className="text-md max-w-[200px] tracking-normal text-center text-white/90">We also updated the format of podcasts and rewards.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center flex-col gap-10">
                    <Image src="/shapes/descussion.svg" width={600} height={600} alt="alt" />
                    <h1 className="text-4xl text-white font-semibold max-w-sm text-center flex justify-center items-center">New Scheduling And Routing Options.</h1>
                    <p className="text-md max-w-[200px] tracking-normal text-center text-white/90">We also updated the format of podcasts and rewards.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-full h-full flex justify-center items-center flex-col gap-10">
                    <Image src="/shapes/saveposts.svg" width={500} height={500} alt="alt" />
                    <h1 className="text-4xl text-white font-semibold max-w-sm text-center flex justify-center items-center">New Scheduling And Routing Options.</h1>
                    <p className="text-md max-w-[200px] tracking-normal text-center text-white/90">We also updated the format of podcasts and rewards.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default AuthSlider