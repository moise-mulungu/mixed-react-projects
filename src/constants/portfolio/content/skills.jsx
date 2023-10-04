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

export const contentAboutHeaderText =
  "Hello I am a software developer, I can help you build a product, feature or website. look through some of my work and experience. if you like what you see and have a project you need coded don't hesitate to contact me."

export const frameworkTitle = 'Frameworks'
export const frameworks = [
  { name: 'React', Icon: DiReact },
  { name: 'Ruby on Rails', Icon: SiRubyonrails },
  { name: 'NodeJS', Icon: DiNodejsSmall },
  { name: 'BooStrap', Icon: DiBootstrap },
  { name: 'Capybara', Icon: GiCapybara },
  { name: 'Selenium', Icon: SiSelenium },
  { name: 'PostgreSQL', Icon: DiPostgresql },
]

export const languageTitle = 'Languages'
export const languages = [
  { name: 'JavaScript', Icon: DiJavascript1 },
  { name: 'Ruby', Icon: DiRuby },
  { name: 'SQL', Icon: TbSql },
]

export const otherSkillsTitle = 'Other Skills'
export const otherSkills = [
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
]

export const skills = [
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

export const myResume =
  'https://docs.google.com/document/d/14Jk9jCBOfWHd7OEEpFVq7Jjxd08DBk1JVyXch1i_MqM/edit'
