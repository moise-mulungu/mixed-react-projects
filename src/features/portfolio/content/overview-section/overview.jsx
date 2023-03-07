import {
  contentOverviewHeaderText,
  contentOverviewParagraphText,
  footerSocialLinks,
} from '@/constants/portfolio/index'

const Overview = (props) => {
  const {} = props
  return (
    <div className="overview">
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

      <h2>{contentOverviewHeaderText}</h2>
      <p>{contentOverviewParagraphText}</p>
    </div>
  )
}

export default Overview
