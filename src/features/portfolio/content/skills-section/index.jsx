import { contentAboutHeaderText } from '@/constants/portfolio/content/skills'
import Divider from '@/ui/divider'
import Button from './button'
import Languages from './languages'
import Frameworks from './frameworks'
import OtherSkills from './other-skills/other-skills'

const Skills = (props) => {
  const { _ = {} } = props
  return (
    <div className="use tw utility classes here">
      <h2 className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
        {contentAboutHeaderText}
      </h2>
      <Button />
      <Divider />
      <Languages />
      <Divider />
      <Frameworks />
      <Divider />
      <OtherSkills />
    </div>
  )
}

export default Skills

const stats = [
  {
    framework: [
      { title: 'framework' },
      {
        items: [
          'Ruby on Rails',
          'React',
          'Redux',
          'CSS',
          'Capybara',
          'RSpec',
          'Selenium',
          'PostgreSQL',
        ],
      },
    ],
  },
  { language: [{ title: 'Languages' }, { items: ['JavaScript', 'CSS'] }] },
  { otherSkill: [{ title: 'Other Skills' }, { items: ['React', 'Redux', 'CSS', 'RSpec'] }] },
]

// This is just a test to see if I can get the data to render from an array of objects
export function SkillTest() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              I am Moise
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">{contentAboutHeaderText}</p>
            <Button />
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-3.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ framework, language, otherSkill }) => (
              <div className="flex flex-col bg-gray-400/5 p-8">
                {/* <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd> */}
                {framework?.map(({ title, items }) => {
                  return (
                    <div>
                      <dt className="text-2xl font-semibold leading-6 text-gray-600">{title}</dt>
                      <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900">
                        {items?.map((item) => {
                          return <div>{item}</div>
                        })}
                      </dd>
                    </div>
                  )
                })}
                {language?.map(({ title, items }) => {
                  return (
                    <div>
                      <dt className="text-2xl font-semibold leading-6 text-gray-600">{title}</dt>
                      <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900">
                        {items?.map((item) => {
                          return <div>{item}</div>
                        })}
                      </dd>
                    </div>
                  )
                })}
                {otherSkill?.map(({ title, items }) => {
                  return (
                    <div>
                      <dt className="text-2xl font-semibold leading-6 text-gray-600">{title}</dt>
                      <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900">
                        {items?.map((item) => {
                          return <div>{item}</div>
                        })}
                      </dd>
                    </div>
                  )
                })}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
