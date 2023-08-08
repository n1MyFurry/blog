import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widgets = ({ type }: { type: string }) => {

    let data = null;
    let amount = 750;
    let diff = 20;

    switch (type) {
        case "user":
          data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (
              <PersonOutlineOutlinedIcon
                className="p-[5px] text-3xl rounded-[5px] self-end"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;
        case "order":
          data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: (
              <ShoppingCartOutlinedIcon
                className="p-[5px] text-3xl rounded-[5px] self-end"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
        case "earning":
          data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: (
              <MonetizationOnOutlinedIcon
                className="p-[5px] text-3xl rounded-[5px] self-end"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
        case "balance":
          data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: (
              <AccountBalanceWalletOutlinedIcon
                className="p-[5px] text-3xl rounded-[5px] self-end"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
          break;
      }

  return (
    <div className="widget gap-5 flex flex-1 p-[10px] justify-between rounded-[10px] h-[140px]">
        <div className="flex flex-col justify-between">
            <span className="font-bold text-sm text-[#A0A0A0]">{data?.title}</span>
            <span className="text-3xl font-semibold">{data?.isMoney && "$"} {amount}</span>
            <span className="text-xs border-b border-gray-600 w-max">{data?.link}</span>
        </div>
        <div className="flex flex-col justify-between">
            <div className="percentage flex items-center text-xl">
                <KeyboardArrowUpIcon className="text-3xl" />
                {diff} %
            </div>
            {data?.icon}
        </div>
    </div>
  )
}

export default Widgets