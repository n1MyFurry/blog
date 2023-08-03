"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { AiTwotoneHeart } from 'react-icons/ai';

type Prop = {
    image: string; 
    author: string; 
    avatarUrl: string; 
    views: string; 
    likes: string; 
    title: string;
}

const Card = ({ image, author, avatarUrl, views, likes, title }: Prop) => {

    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');
    const [isMounted, setIsMonuted] = useState(false);

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 10000));
        setRandomViews(String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + 'k'));
        setIsMonuted(true);
    }, [])
    
    if(!isMounted) {
        return false;
    }

  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card w-fit max-w-[400px]">
        <Link href={`/project`} className="flexCenter group relative w-full h-full">
            <Image
                src={image}
                width={400}
                height={310}
                className="w-full h-full object-cover rounded-2xl"
                alt="Project Image"
            />
            <div className="hidden group-hover:flex profile_card-title">
                <p className="w-full">{title}</p>
            </div>
        </Link>
        <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
            <Link href={`/profile/`}>
                <div className="flexCenter gap-2">
                    <Image
                        src={avatarUrl}
                        width={24}
                        height={24}
                        className="rounded-full"
                        alt="Profile Image"
                    />
                    <p>{author}</p>
                </div>
            </Link>
            <div className="flexCenter gap-3">
                <div className="flexCenter gap-2">
                    <AiTwotoneHeart color="gray" width={20} height={20} />
                    <p className="text-sm">{randomLikes}</p>
                </div>
                <div className="flexCenter gap-2">
                    <FiEye width={13} height={12} />
                    <p className="text-sm">{randomViews}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card