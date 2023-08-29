import Overview from './overview'
import ProjectCards from './project-section/project-cards'
import Divider from '@/ui/divider'
import ContactForm from './contact-form'
import SkillsSection from './skills-section'

export default function Content() {
  return (
    <main
      aria-labelledby="category-heading"
      className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
    >
      <Overview />
      <Divider />
      <ProjectCards />
      <Divider />
      <SkillsSection />
      <Divider />
      <ContactForm />
    </main>
  )
}
