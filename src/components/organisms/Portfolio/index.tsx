import { TitleSecondary } from '@/components/atoms/Titles'
import { CarouselCard } from '@/components/organisms/CarouselCard'
import React from 'react'

export default function Portfolio() {
  return (
    <div className='flex flex-col gap-6 items-center'>
        <div className='flex flex-col w-3/4 gap-5 justify-center items-center'>
            <TitleSecondary title='Portfolio'/>
        </div>
        <CarouselCard/>
    </div>
  )
}
