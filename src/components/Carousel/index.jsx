"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import Card1 from '../../../public/images/Card1.png'
import Card2 from '../../../public/images/Card2.png'
import Card3 from '../../../public/images/Card3.png'
import Card4 from '../../../public/images/Card4.png'
import Card5 from '../../../public/images/Card5.png'

const data = {
  resources: [
    {
      title: 'Card4',
      imageUrl: Card4,
      link: 'Card4'
    },
    {
      title: 'Card3',
      imageUrl: Card3,
      link: 'Card3'
    },
    {
      title: 'Card1',
      imageUrl: Card1,
      link: 'Card1'
    },
    {
      title: 'Card2',
      imageUrl: Card2,
      link: 'Card2'
    },
    {
      title: 'Card5',
      imageUrl: Card5,
      link: 'Card5'
    }
  ]
}

export const Carousel = () => {
  return (
    <div className="flex p-8 relative">
      {data.resources.map((resource, index) => (
        <div
        key={resource.title}
        className={index === 2
          ? 'mt-0 z-50 absolute top-0 mx-[30%] shadow-md shadow-white border'
          : 'relative shadow-md mx-9 shadow-white odd:mt-4 odd:after:bg-opacity-80 even:after:bg-opacity-40 after:absolute after:bg-white after:-inset-0 even:mt-2'.concat(' ', `${index < 2 ? '-ml-10' : '-mr-10'}`)
        }>
          <Image src={resource.imageUrl} alt='Card1' />
        </div>
      ))}
    </div>
  )
}
