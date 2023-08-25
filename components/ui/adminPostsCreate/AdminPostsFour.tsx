import React from 'react';
import FoodCheck from '@/components/ui/postTemplates/food/FoodCheck';

const AdminPostsFour = () => {
  return (
    <div className="h-[700px] w-[1000px] flex justify-center items-center">
      <div className="p-4 border rounded-lg bg-[#97D9F3] text-white text-xl -mt-7 cursor-pointer">Check result and set the images</div>
      <FoodCheck />
    </div>
  )
}

export default AdminPostsFour