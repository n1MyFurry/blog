"use client";

import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured rounded-[10px]">
        <div className="top flex items-center justify-between text-[#818181]">
            <h1 className="text-base font-medium">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize="small" />
        </div>
        <div className="p-5 flex flex-col items-center justify-center gap-[15px]">
            <div>
                <CircularProgressbar value={70} text={`70%`} />
            </div>
            <p className="font-medium text-[#7B7B7B]">Total sales made today</p>
            <p className="text-3xl">$420</p>
            <p className="text-lg font-light text-[#7B7B7B] text-center">
                Previous transactions processiong. Last paymenst may not be included.
            </p>
            <div className="summary flex items-center justify-between w-full">
                <div className="text-center">
                    <div className="text-lg text-[#7B7B7B] font-bold">Target</div>
                    <div className="flex items-center mt-[10px] text-lg">
                        <KeyboardArrowDownIcon />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-lg text-[#7B7B7B] font-bold">Last Week</div>
                    <div className="flex items-center mt-[10px] text-lg">
                        <KeyboardArrowDownIcon />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-lg text-[#7B7B7B] font-bold">Last Month</div>
                    <div className="flex items-center mt-[10px] text-lg">
                        <KeyboardArrowDownIcon />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured