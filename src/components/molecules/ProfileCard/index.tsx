import Avatar from '@/components/atoms/Avatar'
import { TextSecondary, TitleTertiary } from '@/components/atoms/Titles'
import React from 'react'

type ProfileCardProps = {
    Image: string,
    name: string,
    role: string,
}

export default function ProfileCard({ Image, name, role }: ProfileCardProps) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-60 gap-2'>
        <Avatar src={Image} alt={name}/>
        <TitleTertiary title={name}/>
        <TextSecondary text={role}/>
    </div>
  )
}
