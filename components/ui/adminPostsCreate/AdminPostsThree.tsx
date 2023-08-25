import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Food from '@/components/ui/postTemplates/food/FoodInput';
import { AppDispatch, useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';
import { setType } from '@/store/features/adminCreatePost/postTypeReducer';

const AdminPostsThree = () => {

  const cookies = new Cookies();
  const dispatch = useDispatch<AppDispatch>();

  const typeTheme = useAppSelector((state) => state.adminPostTypeReducer.type);

  useEffect(() => {
    if(cookies.get('setType')) {
      dispatch(setType(cookies.get('setType')));
    }
  }, []);

  return (
    <div className="h-[700px] w-[1000px] overflow-y-scroll">
      {typeTheme === "food" && <Food />}
      {typeTheme !== "food" && (
        <div>You choose {typeTheme} type theme</div>
      )}
    </div>
  )
}

export default AdminPostsThree