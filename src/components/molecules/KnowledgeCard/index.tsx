import { TextSecondary, TitleTertiary } from '@/components/atoms/Titles';
import React from 'react'

type KnowledgeCardCardProps = {
    icon: JSX.Element;
    title: string;
    description: string;
}

export default function KnowledgeCard({icon, title, description}: KnowledgeCardCardProps) {
  return (
    <div className='flex flex-col bg-white items-center justify-evenly h-80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary/10 duration-300 text-center pt-3'>
        <div className='text-primary w-16 h-16'>
            {icon}
        </div>
        <TitleTertiary title={title}/>
        <div className='flex p-2 h-1/2'>
          <TextSecondary text={description}/>
        </div>
    </div>
  )
}
