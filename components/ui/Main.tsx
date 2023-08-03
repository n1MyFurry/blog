import React from 'react';
import Filters from './Filters';
import Card from './Card';

const Main = () => {
  return (
    <main className="w-full h-full">
        <Filters />
        <div className="px-8 py-4 flex flex-row justify-around items-center gap-2 flex-wrap gap-y-10 mt-7">
          <Card image='/img.png' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
          <Card image='/img.png' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
          <Card image='/img3.jpg' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
          <Card image='/img.png' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
          <Card image='/img3.jpg' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
          <Card image='/img.png' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
          <Card image='/img3.jpg' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
          <Card image='/img.png' author='jhk' avatarUrl='/img2.jpg' views='123' likes='123' title='Title' />
        </div>
    </main>
  )
}

export default Main