import { useState, useEffect } from 'react'
import Overview from './overview'
import Skills from './skills-section'
import ProjectCard from './project-section/project-cards'
import Divider from '@/ui/divider'
import ContactForm from './contact-from'
import { Example } from './project-section/project-cards'
// import { Example2 } from './overview'

export default function Content(props) {
  const { data } = props

  /* 4 sections, OR hero and 3 sections */
  return (
    <>
      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
      >
        <Overview />
        <Divider />
        <ProjectCard />
        <Divider />
        <Example />
        <Divider />
        <Skills />
        <Divider />
        <ContactForm />
        <Divider />
      </section>
    </>
  )
}

// I have added Divider temporarily for separating sections of the portfolio.
