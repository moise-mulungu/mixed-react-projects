import {
  contentOverviewHeaderText,
  contentOverviewParagraphText,
  footerSocialLinks,
} from '@/constants/portfolio/index'

const Overview = (props) => {
  const { empty = {} } = props // MM: toDM: I did this to avoid the eslint error: here is the resources I used to fix it: https://eslint.org/docs/latest/rules/no-empty-pattern.
  return (
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
          // MM: ???DM: i was getting this error: "Missing key prop for the element iterator". I then added it to the <li></li> element, is it a good practice to add it to the <li></li> element instead of to the <a></a> element?
          // DM: Yes, you add the key prop to the element that repeats within it's containing element; 'a' does not repeat within it's containing element (which is 'li'), but 'li' repeats within the 'div'.
        })}
      </ul>

      <h2>{contentOverviewHeaderText}</h2>
      <p>{contentOverviewParagraphText}</p>
    </div>
  )
}

export default Overview
