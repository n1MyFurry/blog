import React from 'react';
import { categoryFilters } from '@/constants';

const Filters = () => {
  return (
    <div className="py-4 px-5">
        <div className="flex justify-center items-center gap-4">
            {categoryFilters.map((category) => (
                <div className={`${category.toLowerCase() === "discover" ? 'bg-[#91D8F3] text-white' : ''} px-3 py-3 hover:bg-[#91D8F3] hover:text-white transition rounded-xl cursor-pointer`}>{category}</div>
            ))}
        </div>
    </div>
  )
}

export default Filters