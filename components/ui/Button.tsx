import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

type Props = {
    title: string;
    color?: string;
    bgColor?: string;
    borderColor?: string;
    handleClick?: MouseEventHandler;
    type: 'button' | 'submit';
    leftIcon?: string;
}

const Button = ({ title, color, bgColor, handleClick, type, borderColor, leftIcon }: Props) => {
  return (
    <button
        type={ type || 'button' }
        className={`flex justify-center items-center gap-4 px-4 py-3 
                  ${color ? color : 'text-primary-text'} 
                  ${bgColor ? bgColor : ''} 
                  ${borderColor ? `${borderColor} border-2` : ''}
                  rounded-lg text-lg font-medium max-md:w-full box-border`}
        onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={25} height={25} alt="image" />}
      {title}
    </button>
  )
}

export default Button