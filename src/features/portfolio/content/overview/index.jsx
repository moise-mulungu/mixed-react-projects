import {
  contentOverviewHeaderText,
  contentOverviewParagraphText,
  footerSocialLinks,
} from '@/constants/portfolio/index'

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
            <li key={id} className="ml-2 font-medium">
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
