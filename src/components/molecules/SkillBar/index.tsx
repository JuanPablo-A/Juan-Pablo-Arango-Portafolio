import { Progress } from '@/components/atoms/ProgressBar'
import { TextPrincipal, TitleTertiary } from '@/components/atoms/Titles'
import { Lenguage } from '@/types'
import React from 'react'

type SkillBarProps = {
    title: string,
    lengauges: Lenguage[],
}

export default function SkillBar({ title, lengauges }: SkillBarProps) {
  return (
    <div className='flex flex-col gap-3 w-56 mb-4'>
      <TitleTertiary title={title}/>
      {
        lengauges.map((lenguage) => (
          <div key={lenguage.id} className='flex flex-col w-full'>
            <div className='flex justify-between'>
              <TextPrincipal text={lenguage.name}/>
              <TextPrincipal text={`${lenguage.progress}%`}/>
            </div>
            <Progress value={lenguage.progress}/>
          </div>
        ))
      }
    </div>
  )
}
