"use client";

import React, { useEffect } from 'react';


const page = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
    
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-screen">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <p>Paragraph 4</p>
        <p>Paragraph 5</p>
      </div>
      <div className="w-screen h-screen">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <p>Paragraph 467867868</p>
        <p>Paragraph 5</p>
      </div>
    </div>
  )
}

export default page