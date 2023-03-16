import {
  contentOverviewHeaderText,
  contentOverviewParagraphText,
  footerSocialLinks,
} from '@/constants/portfolio/index'
// DM: glad to see you use "renamed imports"
// DM: why did you choose v4? I know the NPM example is this syntax. But, considering the "don't make me think" principle, unless you have some compelling reason to call out v4 how about a more generic alias?
// try: import { v4 as uuid } from 'uuid'
// (that also will let you change the actual function, v4, to v5 in the future without editing code below)
// if you haven't, use the global search/replace in the left-side search panel. you can replace all uuidv4 with uuid, but check to be sure it only replaces the ones you want.
import { v4 as uuidv4 } from 'uuid'

const Overview = (props) => {
  // MM: ???DM: I did this to avoid the eslint error: here is the resources I used to fix it: https://eslint.org/docs/latest/rules/no-empty-pattern. super! typically the variable '_' can mean 'not used'
  const { _ = {} } = props
  return (
    // DM: ???MM: did you have an idea for 'overview' class? can you use TW utility classes?
    // DM: todoDM: write example of a 'wrapper' component that serves only to make chosen TW utility classes reusable
    <div className="overview">
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        {footerSocialLinks.map(({ id, name, title, Icon, url }) => {
          return (
            <li key={uuidv4()} className="ml-2 font-medium">
              <a href={url}>
                {name ? name : null}
                {Icon ? <Icon title={title} /> : null}
              </a>
            </li>
          )
        })}
      </ul>

      <h2>{contentOverviewHeaderText}</h2>
      <p>{contentOverviewParagraphText}</p>
    </div>
  )
}

export default Overview
