import {
  DiJavascript1,
  DiRuby,
  DiPostgresql,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiGit,
  DiGithubBadge,
  DiTerminal,
  DiJira,
  DiBootstrap,
  DiRspec,
  DiCode,
  DiCodeBadge,
  DiCodepen,
} from 'react-icons/di'

import { BsSlack } from 'react-icons/bs'
import { GrGraphQl } from 'react-icons/gr'
import { TbSql } from 'react-icons/tb'
import { GiCapybara } from 'react-icons/gi'
import { SiSelenium, SiRubyonrails } from 'react-icons/si'
import Item from './item'
const skills = [
  {
    frameworks: [
      { title: 'frameworks' },
      {
        items: [
          { name: 'React', Icon: DiReact },
          { name: 'Ruby on Rails', Icon: SiRubyonrails },
          { name: 'NodeJS', Icon: DiNodejsSmall },
          { name: 'BooStrap', Icon: DiBootstrap },
          { name: 'Capybara', Icon: GiCapybara },
          { name: 'Selenium', Icon: SiSelenium },
          { name: 'PostgreSQL', Icon: DiPostgresql },
        ],
      },
    ],
  },
  {
    languages: [
      { title: 'Languages' },
      {
        items: [
          { name: 'JavaScript', Icon: DiJavascript1 },
          { name: 'Ruby', Icon: DiRuby },
          { name: 'SQL', Icon: TbSql },
        ],
      },
    ],
  },
  {
    otherSkills: [
      { title: 'Other Skills' },
      {
        items: [
          { name: 'HTML', Icon: DiHtml5 },
          { name: 'CSS', Icon: DiCss3 },
          { name: 'SASS', Icon: DiSass },
          { name: 'GraphQL', Icon: GrGraphQl },
          { name: 'Git', Icon: DiGit },
          { name: 'GitHub', Icon: DiGithubBadge },
          { name: 'CodeLab', Icon: DiCode },
          { name: 'CodeLit', Icon: DiCodeBadge },
          { name: 'Terminal', Icon: DiTerminal },
          { name: 'VSCode', Icon: DiCodepen },
          { name: 'Jira', Icon: DiJira },
          { name: 'Slack', Icon: BsSlack },
        ],
      },
    ],
  },
]

// This is just a test to see if I can get the data to render from an array of objects
export default function ComplexObject() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mapping a Complex Object into the UI
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">Your text goes here ...</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-3.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ frameworks, languages, otherSkills }) => (
              <div className="flex flex-col bg-gray-400/5 p-8">
                {/* <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd> */}
                {/* 
                  make the first one look good
                  extract repeated code to a separate function (Component)
                  */}
                {frameworks?.map(({ title, items }) => {
                  return (
                    <Item
                      title={title}
                      items={items?.map(({ name, Icon }) => {
                        return (
                          <div className="flex items-center justify-center">
                            <Icon className="w-6 h-6 mr-2" />
                            <div>{name}</div>
                          </div>
                        )
                      })}
                    />
                  )
                })}
                {languages?.map(({ title, items }) => {
                  return (
                    <Item
                      title={title}
                      items={items?.map(({ name, Icon }) => {
                        return (
                          <div className="flex items-center justify-center">
                            <Icon className="w-6 h-6 mr-2" />
                            <div>{name}</div>
                          </div>
                        )
                      })}
                    />
                  )
                })}
                {otherSkills?.map(({ title, items }) => {
                  return (
                    <Item
                      title={title}
                      items={items?.map(({ name, Icon }) => {
                        return (
                          <div className="flex items-center justify-center">
                            <Icon className="w-6 h-6 mr-2" />
                            <div>{name}</div>
                          </div>
                        )
                      })}
                    />
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
