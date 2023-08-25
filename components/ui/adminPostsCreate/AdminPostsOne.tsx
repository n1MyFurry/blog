import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import { adminCreatePostTheme } from '@/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Cookies from 'universal-cookie';
import { setType } from '@/store/features/adminCreatePost/postTypeReducer';
import { setNode } from '@/store/features/adminCreatePost/nodeReducer';
import { setTheme } from '@/store/features/adminCreatePost/themeReducer';
import { setSeo } from '@/store/features/adminCreatePost/seoReducer';
import { useDispatch } from 'react-redux';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { AppDispatch, useAppSelector } from '@/store/store';

const AdminPostsOne = ({ handleClick }: { handleClick: MouseEventHandler }) => {

  const dispatch = useDispatch<AppDispatch>();
  const cookies = new Cookies();

  const changeState = (type: string) => {
    dispatch(setType(type));
    dispatch(setNode("seo"));
    dispatch(setTheme("completed"));
    dispatch(setSeo("editing"));
    cookies.set('setType', type, { path: '/' });
    cookies.set('setNode', "seo", { path: '/' });
    cookies.set('setTheme', "completed", { path: '/' });
    cookies.set('setSeo', "editing", { path: '/' });
  }

  return (
    <div className="flex justify-center -mt-[140px] gap-5 flex-wrap items-center w-[1000px] h-[700px]">
      <Swiper pagination={{
        bulletActiveClass: 'admin-bullet-post',
        clickable: true
      }} modules={[Pagination]} className="h-full flex justify-center items-center w-full">
        {adminCreatePostTheme.map((themeBlock, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="w-full h-full flex justify-center items-center flex-col gap-y-10">
            {themeBlock.map((theme, index1) => (
              <div onClick={() => {changeState(theme.type)}} key={index1} className="w-[800px] h-[160px] border rounded-xl overflow-hidden relative">
                <div className="z-20 absolute w-full h-full bg-black opacity-70"></div>
                <div className="hover-food w-full h-full absolute z-[999] text-white flex justify-center items-center left-0 font-semibold text-3xl cursor-pointer">{theme.name}</div>
                <Image className="hover-food-image w-full h-full hover:scale-[1.5] transition" src={theme.image} width={700} height={150} alt="food" />
              </div>
            ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AdminPostsOne