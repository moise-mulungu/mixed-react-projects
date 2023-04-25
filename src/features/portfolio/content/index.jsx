import { useState, useEffect } from 'react'
import Overview from './overview'
import Skills from './skills-section'
import ProjectCards from './project-section/project-cards'
import Divider from '@/ui/divider'
import ContactForm from './contact-from'

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
        <ProjectCards />
        <Divider />
        <Skills />
        <Divider />
        <ContactForm />
        <Divider />
      </section>
    </>
  )
}

// MM: I have added Divider temporarily for separating sections of the portfolio.
