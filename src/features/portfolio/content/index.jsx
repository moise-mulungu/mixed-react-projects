import { useState, useEffect } from 'react'
import Overview from './overview'
import ProjectCards from './project-section/project-cards'
import Divider from '@/ui/divider'
import ContactForm from './contact-form'
import SkillsSection from './skills-section'

export default function Content(props) {
  const { data } = props

  /* 4 sections, OR hero and 3 sections */
  return (
    <main
      aria-labelledby="category-heading"
      className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
    >
      {/* DM: todoMM: seems to me that you have 4 sections below, not 1 section: Yes, I see them */}

      <Overview />
      <Divider />
      <ProjectCards />
      <Divider />
      <SkillsSection />
      <Divider />
      <ContactForm />
      {/* is this last divider needed?(I see! no the last one is unnecessary) */}
    </main>
  )
}
