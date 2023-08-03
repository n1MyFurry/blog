import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col w-full">
        <Image 
          src="/logo.svg"
          width={115}
          height={38}
          alt="footer"
        />
        <p className="text-start max-w-xs mt-5 text-sm font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ea eos officia.
        </p>
      </div>
        <div className="flex justify-between items-center footer_copyright mt-5">
            <p>
                @ 2023 Flexibble. All Rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer