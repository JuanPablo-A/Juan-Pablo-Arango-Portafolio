import KnowledgeSection from '@/components/organisms/KnowledgeSection'
import ProjectCard from '@/components/molecules/ProjectCard'
import React from 'react'
import EducationSection from '@/components/organisms/EducationSection'
import Portfolio from '../Portfolio'
import Footer from '../Footer'

export default function PortfolioSection() {
  return (
    <div className='flex flex-col gap-6 w-3/5'>
      <ProjectCard/>
      <KnowledgeSection/>
      <EducationSection/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}
