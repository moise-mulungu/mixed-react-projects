import {
  contentOverviewHeaderText,
  contentOverviewParagraphText,
} from '@/constants/portfolio/content/overview'
import { socialLinks } from '@/constants/portfolio'
import { v4 as uuid } from 'uuid'

const Overview = (props) => {
  // MM: ???DM: I did this to avoid the eslint error: here is the resources I used to fix it: https://eslint.org/docs/latest/rules/no-empty-pattern. super! typically the variable '_' can mean 'not used'
  const { _ = {} } = props
  return (
    // DM: todoDM: write example of a 'wrapper' component that serves only to make chosen TW utility classes reusable
    <div className="use tw utility classes here">
      <ul className="flex flex-wrap items-center mt-5 text-sm text-gray-900 dark:text-gray-400 sm:mt-0">
        <h2>{contentOverviewHeaderText}</h2>
        <p>{contentOverviewParagraphText}</p>
        {socialLinks.map(({ id, name, title, Icon, url }) => {
          return (
            <li key={uuid()} className="ml-2 font-medium">
              <a href={url}>
                {name || null}
                {Icon ? <Icon title={title} /> : null}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Overview
